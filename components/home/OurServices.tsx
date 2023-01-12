import React from 'react';
import { FaBusAlt, FaHotel } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BsHeadset, BsPersonBoundingBox } from 'react-icons/bs';
import { MdPriceCheck } from 'react-icons/md';

export const OurServices: React.FC = () => {
  const ServicesArray = [
    {
      title: 'Wide Variety of Tours',
      icon: <FaBusAlt size={75} color="white" />,
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      title: 'Highly Qualified Service',
      icon: <AiFillStar size={75} color="white" />,
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      title: '24/7 Support',
      icon: <BsHeadset size={75} color="white" />,
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
    {
      title: 'Personalized Matching',
      icon: <BsPersonBoundingBox size={75} color="white" />,
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      title: 'Handpicked Hotels',
      icon: <FaHotel size={75} color="white" />,
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      title: 'Best Price Guarantee',
      icon: <MdPriceCheck size={75} color="white" />,
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
  ];

  return (
    <div className="flex flex-col flex-grow justify-between text-center my-10">
      <h1 className="text-3xl md:text-5xl text-primaryColor font-bold mt-4 mx-6">
        OUR SERVICES
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-4 p-4 mx-2">
        {ServicesArray.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around items-center w-auto rounded-md h-auto p-6 gap-4 bg-primaryColor
               text-white hover:bg-emerald-700 hover:scale-110 transition duration-500"
            >
              <h2 className="md:text-2xl text-lg font-semibold md:font-bold">
                {service.title}
              </h2>

              <p className="md:text-lg text-md md:px-6 ">
                {service.description}
              </p>

              <div className="py-2">{service.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
