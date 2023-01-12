import { MainHeader } from '../../components/common/MainHeader';
import { CommonHeroSection } from '../../components/common/CommonHeroSection';
import { Tours } from '../../components/tours/Tours';
import { GetStaticProps } from 'next';
import { getAllTours } from '../../data/ToursData';
import { ToursObject } from '../../types/types';
import { InferGetStaticPropsType } from 'next';

export default function ToursPage({
  all_tours,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Our Tours" />
      <CommonHeroSection
        title="CREATE YOUR TOUR"
        subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum."
        cssStyle="tours-background"
      />
      <Tours all_tours={all_tours} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const all_tours = getAllTours();
  // console.log(all_tours)

  if (!all_tours) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_tours: all_tours },
    revalidate: 3600,
  };
};
