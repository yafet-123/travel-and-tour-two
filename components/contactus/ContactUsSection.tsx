import React from 'react';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

export const ContactUsSeciton: React.FC = () => {
  const ServicesArray = [
    {
      title: 'VISIT US',
      icon: <ImLocation size={75} color="white" />,
      description: 'Addis Ababa Ethiopia Bole, Rwanda Street',
    },
    {
      title: 'CALL US',
      icon: <AiFillPhone size={75} color="white" />,
      description: '+251 123 587 4444',
    },
    {
      title: 'EMAIL US',
      icon: <AiFillMail size={75} color="white" />,
      description: 'ecotravelethiopia@gmail.com',
    },
  ];

  return (
    <div className="flex flex-col  bg-white my-10">
      <div className="flex flex-col justify-center items-center w-full gap-4 my-16 h-auto text-primaryColor">
        <h2 className="lg:text-5xl md:text-4xl text-4xl font-bold md:font-bold ">
          CONTACT US
        </h2>
        <p className="md:text-2xl text-lg px-2 w-auto lg:mx-48 text-center ">
          Our team of experts are ready to help you with any questions about a
          trip to Ethiopia. Call us now to start your journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-4 p-4">
        {ServicesArray.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around items-center w-auto rounded-md h-auto p-6 gap-6 bg-primaryColor
               text-white hover:bg-emerald-700 hover:scale-110 transition duration-500 "
            >
              <div className="py-2">{service.icon}</div>
              <h2 className="md:text-2xl text-lg font-semibold md:font-bold">
                {service.title}
              </h2>

              <p className="lg:text-lg md:text-sm sm:text-lg lg:px-6 ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
