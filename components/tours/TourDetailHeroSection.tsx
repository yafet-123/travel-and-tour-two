import React from 'react';
import { FaBusAlt, FaPlane, FaHotel, FaClock } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

export const TourDetailHero: React.FC<any> = ({ tour, cssProperty }) => {
  return (
    <React.Fragment>
      <div
        className={`flex flex-col justify-center gap-2 md:gap-16 items-center h-full md:h-screen bg-cover ${cssProperty} py-24 px-4`}
      >
        <h1 className="text-white text-center text-3xl font-bold md:text-6xl mb-5">
          {tour.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around md:gap-12 gap-2 text-white text-center font-bold text-2xl ">
          <div className="flex flex-col gap-2 w-full md:h-52 justify-around bg-primaryColor bg-opacity-70 rounded-lg p-4 hover:bg-primaryColor  transition duration-500">
            <div className="flex flex-row gap-6 justify-evenly">
              <FaBusAlt color="white" size={50} />{' '}
              <FaPlane color="white" size={50} />
            </div>
            <h1>{tour.transportation}</h1>
          </div>
          <div className="flex flex-col gap-2  w-full md:h-52 justify-evenly bg-primaryColor bg-opacity-70 rounded-lg p-4 hover:bg-primaryColor  transition duration-500">
            <div className="flex flex-row gap-6 justify-evenly">
              <FaHotel color="white" size={50} />{' '}
              {/* <FaPlane color="white" size={50} /> */}
            </div>
            <h1>{tour.accommodation}</h1>
          </div>
          <div className="flex flex-col gap-2  w-full md:h-52 justify-evenly bg-primaryColor bg-opacity-70 rounded-lg p-4 hover:bg-primaryColor  transition duration-500">
            <div className="flex flex-row gap-6 justify-evenly">
              <FaClock color="white" size={50} />{' '}
              {/* <FaPlane color="white" size={50} /> */}
            </div>
            <h1>{tour.duration}</h1>
          </div>
          <div className="flex flex-col gap-2  w-full md:h-52 justify-evenly bg-primaryColor bg-opacity-70 rounded-lg p-4 hover:bg-primaryColor  transition duration-500">
            <div className="flex flex-row gap-6 justify-evenly">
              <BsPeopleFill color="white" size={50} />{' '}
              {/* <FaPlane color="white" size={50} /> */}
            </div>
            <h1>{tour.groupsize} Group Size</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
