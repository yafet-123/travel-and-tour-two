import React from 'react';
import Link from 'next/link';

export const AboutUsSeciton: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full  my-16 h-[500px] text-primaryColor bg-white">
      <h2 className="lg:text-5xl md:text-4xl text-4xl font-bold md:font-bold ">
        ABOUT US
      </h2>
      <p className="md:text-2xl text-lg px-2 w-auto  lg:mx-48 text-center ">
        Eco-travel Ethiopia was founded to offer environmentally-friendly tours.
        our commitment is as reflected in our name offering tours with a softer
        footprint. We believe that Protecting the places we visit is necessary
        to ensure we can continue to introduce travelers to the spectacular
        beauty of Ethiopia.
      </p>

      <div>
        <Link href="/#">
          <h4 className="underline  font-bold text-xl font-sans">READ MORE</h4>
        </Link>
      </div>
    </div>
  );
};
