import React from 'react';
import Image from 'next/image';
import TestimonyImageOne from '../../public/testimony-black-guy.jpg';
import TestimonyImageTwo from '../../public/testimony-white-guy.jpg';
// import TestimonyImageLady from '../public/testimony.jpg';

export const TestimonialSection: React.FC = () => {
  const Testimonies = [
    {
      name: 'TOMMIE DOE',
      personImage: TestimonyImageOne,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      name: 'TOMMIE DOE',
      personImage: TestimonyImageTwo,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      name: 'TOMMIE DOE',
      personImage: TestimonyImageOne,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      name: 'TOMMIE DOE',
      personImage: TestimonyImageTwo,
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="text-center my-10 bg-slate-100">
      <div className="flex flex-col flex-grow justify-between mx-8">
        <div>
          <h1 className="text-2xl md:text-5xl text-primaryColor font-bold mt-4">
            Don&apos;t just take our word for it... Read reviews from Travelers
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 my-16 ">
          {Testimonies.map((person, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-around items-center w-full  sm:my-16 my-8 h-auto p-6 gap-4 bg-white
               text-black hover:bg-primaryColor hover:text-white transition duration-300 border-primaryColor border-4"
              >
                <Image
                  src={person.personImage}
                  alt="Testimony image"
                  //   height={200}
                  // width={150}
                  priority
                  className="w-32 h-32 rounded-full -mt-20"
                />

                <div>
                  <p className="md:text-lg text-md px-2">
                    {' '}
                    <span className="font-extrabold">&#10077;</span>{' '}
                    {person.testimony}
                    <span className="font-extrabold">&#10078;</span>
                  </p>
                </div>
                <div>
                  <h2 className="md:text-xl text-md font-bold">
                    {person.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
