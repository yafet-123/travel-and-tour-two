import React from 'react';
import Image from 'next/image';

export const AboutTheTour: React.FC<any> = ({ tour }) => {
  return (
    <React.Fragment>
      <div
        className="grid md:grid-cols-2 grid-cols-1  justify-around items-center gap-12
       md:bg-primaryColor text-primaryColor md:text-white bg-opacity-90 md:my-16 my-4 p-4 md:p-12"
      >
        <div className="text-left font-bold">
          <h1 className="md:text-5xl text-4xl my-4">About the Tour</h1>
          <p className="font-normal md:text-lg">{tour.description}</p>
        </div>
        <Image
          src={tour.imagePath}
          alt={tour.title}
          priority
          className="md:w-[500px] md:h-[500px]"
        />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1  justify-around border-y-2 border-primaryColor gap-12 bg-white text-primaryColor md:my-16 my-4 p-4 md:p-12">
        <div className="text-left font-semibold">
          <h1 className="md:text-4xl text-3xl font-bold">Included </h1>
          <ul className="text-lg text-left  text-primaryColor ">
            {tour.included.map((item: String, index: any) => {
              return (
                <li key={index} className="my-2">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-left font-semibold">
          <h1 className="md:text-4xl text-3xl font-bold">Not Included </h1>
          <ul className="text-lg text-left text-primaryColor ">
            {tour.notincluded.map((item: String, index: any) => {
              return (
                <li key={index} className="my-2">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="text-center font-bold text-primaryColor">
        <h1 className="md:text-5xl text-4xl my-4">Detail Itinerary</h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1  justify-around  gap-12 bg-white text-primaryColor md:my-16 my-4 p-4 md:p-12">
        {tour.detailedItinerary.map((detail: any, index: any) => {
          return (
            <div key={index} className="border-b-4 m-2 border-primaryColor">
              <h2 className="font-bold md:text-xl my-3">Day {detail.day}</h2>
              <h2 className="font-bold md:text-xl my-3">{detail.title}</h2>
              <p className="md:font-semibold md:text-lg text-md my-3">
                {detail.detail}
              </p>
              <h2 className="font-bold md:text-xl mb-2">
                Over Night: {detail.overnight}
              </h2>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
