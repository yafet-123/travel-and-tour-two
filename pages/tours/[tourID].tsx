import { MainHeader } from '../../components/common/MainHeader';
// import { CommonHeroSection } from '../../components/CommonHeroSection';
// import { Tours } from '../../components/Tours';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllTours, getTourById } from '../../data/ToursData';
// import { ToursObject } from '../../types/types';
import { InferGetStaticPropsType } from 'next';
import { TourDetailHero } from '../../components/tours/TourDetailHeroSection';
import { AboutTheTour } from '../../components/tours/AboutTheTour';
// import { TourForm } from '../../components/tours/TourForm';

export default function TourDetail({
  tour,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  tour = tour[0];

  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={tour.title} />
      <TourDetailHero tour={tour} cssProperty="hero-background" />
      <AboutTheTour tour={tour} />
      {/* <TourForm /> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tourID = context.params.tourID;
  const tour = getTourById(tourID);

  if (!tour) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tour: tour },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const tours = getAllTours();
  //   console.log(context)

  // Get the paths we want to pre-render based on tours
  const paths = tours.map((tour) => ({
    params: { tourID: tour.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
};
