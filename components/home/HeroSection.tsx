// import Image from 'next/image';
// import heroImage from  '../public/Simien-Mountains-landscapes.jpeg';

import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-fixed hero-background">
      <div className="flex flex-col gap-8 font-bold h-1/2 text-center justify-center items-center">
        <div>
          <h1 className="text-white text-3xl md:text-6xl m-4">
            <span className="font-normal">TRUST</span> OUR EXPERIENCE
          </h1>
        </div>
        <div>
          <h1 className="text-white text-xl md:text-3xl m-4">
            Eco-Travel Ethiopia Offers You Sustainable and Environmentally
            Friendly Tours.
          </h1>
        </div>
        <div className="w-72">
          <Link href="/tours">
            <h1
              className="border-4 font-bold cursor-pointer text-white text-3xl py-3 hover:border-white hover:text-primaryColor hover:bg-white
              shadow-sm shadow-white border-white rounded-sm w-72 bg-primaryColor hover:scale-110 transition duration-300  items-center justify-center"
            >
              See Tours
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
