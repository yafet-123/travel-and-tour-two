import React from 'react';
import { HeroContent } from '../../types/types';

export const DestinationsHeroSection: React.FC<any> = ({
  title,
  //   subtitle,
  cssStyle,
  destinationType,
  setCurentAttraction,
}) => {
  // if(isDestinations) console.log(destinationType)

  const handleChangeAttraction = (destination_id: String) => {
    setCurentAttraction(destination_id);
  };

  return (
    <div
      className={`flex justify-center items-center h-[550px] w-full md:h-screen bg-cover ${cssStyle}`}
    >
      <div className="flex flex-col gap-8 font-bold text-center md:p-12">
        <div>
          <h1 className="text-white text-3xl md:text-6xl m-4">{title}</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-2 text-white text-center font-bold lg:text-2xl text-xl">
          {destinationType?.map((destination: any, index: any) => {
            return (
              <button
                key={index}
                onClick={() => handleChangeAttraction(destination.id)}
                className="p-4 border-4 hover:border-primaryColor bg-primaryColor hover:bg-emerald-600 
            hover:scale-110 transition active:scale-105 after:scale-105 w-auto"
              >
                {' '}
                {destination.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
