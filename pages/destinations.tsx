import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import React, { useState, useEffect } from 'react';
import { MainHeader } from '../components/common/MainHeader';
// import { AboutEthiopia } from '../components/ethiopia/AboutEthiopia';
import {
  getAllAttractions,
  getCulturalAttractions,
  getFestivals,
  getHistoricAttractions,
  getNaturalAttractions,
} from '../data/DestinationsData';
import { AttractionsDetail } from '../components/destinations/AttractionsDetail';
import { DestinationsHeroSection } from '../components/destinations/DestinationsHeroSection';
import { DestinationsType } from '../types/types';

export default function Ethiopia({
  destinations,
  historicalAttractions,
  culturalAttractions,
  festivalAttractions,
  naturalAttractions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentAttraction, setCurrentAttraction] =
    useState<String>('historical');
  const [currentCategory, setCurentCategory] = useState<DestinationsType>(
    historicalAttractions
  );
  console.log(currentAttraction);

  useEffect(() => {
    setCurentCategory(
      destinations.filter(
        (destination: DestinationsType) => destination.id === currentAttraction
      )
    );
  }, [currentAttraction, destinations]);

  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Destinations" />
      <DestinationsHeroSection
        title="Check Out Our Destinations"
        subtitle="Ethiopia may not be the first place you think of when booking your next holiday, but it should be. The country has been developing and its economy is one of the fastest growing in the world."
        cssStyle="ethiopia-background"
        isDestinations={true}
        destinationType={destinations}
        setCurentAttraction={setCurrentAttraction}
      />

      <AttractionsDetail currentCategory={currentCategory} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const destinations = getAllAttractions();
  const historicalAttractions = getHistoricAttractions();
  const culturalAttractions = getCulturalAttractions();
  const festivalAttractions = getFestivals();
  const naturalAttractions = getNaturalAttractions();

  if (!destinations) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destinations: destinations,
      historicalAttractions: historicalAttractions,
      culturalAttractions: culturalAttractions,
      festivalAttractions: festivalAttractions,
      naturalAttractions: { naturalAttractions },
    },
    revalidate: 3600,
  };
};
