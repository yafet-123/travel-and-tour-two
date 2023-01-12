import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whychooseusimage from '../../public/Attractions-naturall-endemic-mammals-MOUNTAIN-NYALA-overland-ethiopia-tour.jpg';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-24 bg-primaryColor py-5">
      <div className="flex justify-center items-center">
        <div className="mx-2">
          <Image
            className="border-primaryColor rounded-xl"
            alt="why choose us image"
            src={whychooseusimage}
            width={500}
            height={400}
          />
        </div>
      </div>

      <div className="flex text-white flex-col px-6 md:px-12 w-full h-full justify-start md:mx-auto gap-4">
        <h2 className=" font-bold text-3xl  md:text-4xl lg:text-5xl my-4">
          WHY CHOOSE US
        </h2>
        <p className=" text-left md:text-xl text-lg my-2">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="/#">
          <h4 className="underline font-bold text-2xl sm:text-xl font-sans">
            LEARN MORE
          </h4>
        </Link>
      </div>
    </div>
  );
};
