import React from 'react';
import Link from 'next/link';

export const HeroSectionCards: React.FC = () => {
  const CardsArray = [
    {
      id: 'historical',
      name: 'Historical Routes',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 'trekking',
      name: 'Mountain Trekking',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 'adventure',
      name: 'Adventure Expeditions',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];

  return (
    <div
      className="flex flex-col text-white my-8 w-5/6 mx-auto justify-center space-y-4 md:space-y-0 
    md:space-x-8 md:flex-row space-x-0 md:-mt-16 md:h-128 md:my-16"
    >
      {CardsArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${card.id} bg-cover bg-blend-darken	justify-around rounded-sm md:hover:scale-110 md:transition md:duration-500 
                         flex flex-col place-items-center text-center border-secondaryColor border-8  h-96 md:h-[450px] lg:h-[500px] py-3`}
          >
            <div>
              <h3 className="text-3xl font-bold font-monospace ">
                {card.name}
              </h3>
            </div>

            <div className="flex flex-col w-3/4 items-center gap-4 ">
              <p className="text-md  text-white">{card.description}</p>
              <Link href="/">
                <h5 className="border text-white font-semibold font-monospace hover:font-bold mt-2 p-1 ">
                  Read More
                </h5>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
