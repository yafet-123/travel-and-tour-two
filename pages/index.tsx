import { MainHeader } from '../components/common/MainHeader';
// import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/home/HeroSection';
import { HeroSectionCards } from '../components/home/HeroSectionCards';
import { Featured } from '../components/home/FeaturedTour';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { OurServices } from '../components/home/OurServices';
import { AboutUsSeciton } from '../components/home/AboutUsSection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { GetStaticProps } from 'next';
import { getFeaturedTours } from '../data/ToursData';
import { ToursObject } from '../types/types';
import { InferGetStaticPropsType } from 'next';

export default function Home({
  featured_tours,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(featured_tours);

  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Home" />
      <HeroSection />
      <HeroSectionCards />
      <Featured featuredTours={featured_tours} />
      <WhyChooseUs />
      <OurServices />
      <TestimonialSection />
      <AboutUsSeciton />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const featured_tours = getFeaturedTours();
  // console.log(featured_tours)

  if (!featured_tours) {
    return {
      notFound: true,
    };
  }

  return {
    props: { featured_tours: featured_tours },
    revalidate: 3600,
  };
};
