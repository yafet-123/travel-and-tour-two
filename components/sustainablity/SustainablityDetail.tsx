import Image from 'next/image';
import React from 'react';

export const SustainablityDetail: React.FC = () => {
  return (
    <React.Fragment>
      <div className="lg:pt-36 pt-24 mb-4 bg-fixed">
        <Image
          src="https://www.responsibletravel.com/imagesclient/infographic760.png"
          alt="sustainablity background"
          //   fill
          priority
          width={500}
          height={400}
          className="md:w-full md:h-full"
        />
      </div>

      <div className="flex flex-col gap-8">
        {SustainablityArray?.map((place: any, index: any) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 border-b-4 border-primaryColor justify-center bg-white text-primaryColor md:mx-54 mx-4 mb-3"
            >
              <div
              //   className={`${
              //     place.id % 2 === 0
              //       ? 'md:order-last order-first md:justify-self-center'
              //       : 'md:order-first order-last'
              //   } bg-white text-primaryColor`}
              >
                <h1 className="font-bold my-4 text-2xl md:text-4xl">
                  {place.title}
                </h1>
                <p className="font-semibold md:text-xl text-lg text-left">
                  {place.detail}
                </p>
              </div>
              <div className="items-center justify-center p-4">
                <Image
                  src={place.imageUrl}
                  alt={place.title}
                  priority
                  width={400}
                  height={300}
                  className="md:w-full md:h-[500px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const SustainablityArray = [
  {
    id: 1,
    title: 'RESPONSIBLE TRAVEL',
    detail: `Our company was founded to offer environmentally-friendly tours. It’s a commitment
      that is reflected in our name: Ecotravel. We strive to travel responsibly by making
      environmentally-friendly choices and carbon neutralizing our tours, by working with
      locally-owned businesses and supporting local non-profits whose aims are to support
      local causes, environments, or wildlife. With our Environmentally friendly and economic fuel utilization vehicles, We take you to amazing destinations, navigating far
      and wide, and when we do, it comes at a price in the form of carbon emissions, which
      contribute to climate change.`,
    imageUrl:
      'https://img.freepik.com/premium-photo/leaf-world-map-placed-fresh-spring-grass-sustainable-world-developmet-conceptual-design-3d-illustration_533392-326.jpg?w=900',
  },
  {
    id: 2,
    title: 'WE SUPPORT LOCAL AND SUSTAINABLE BUSINESSES',
    detail: `We believe that working with local communities helps reduce our impact on tourist
      destinations, while also providing amazing, unique experiences for our responsible
     clients. Our tours generally support local communities through the purchase of local
     goods and services, visiting social projects, and promoting authentic encounters that
     foster cross-cultural understanding. We also use locally owned lodges and hotels in our
     trips and arrange a village tours to support the local economy and reduce their
     dependence on Nature.`,
    imageUrl:
      'https://rmi.org/wp-content/uploads/2020/04/women_girls_coffee_beans_East_Africa_Ethiopia_Stock-627584522.jpg',
  },
  {
    id: 3,
    title: 'POLLUTION (Leave Nothing But Footprints)',
    detail: `We believe that reducing our carbon footprint will also have a beneficial impact on our
      local area by reducing congestion and air pollution. Using green and ecological
      principles, Buying eco-label products, Reducing paper consumption, Choosing
       suppliers who are committed to sustainability, Reducing our brochure use, encouraging
      clients to recycle their brochures, and using environmentally friendly cleaning materials
      are some of our best experience to reduce our impact against the environment.`,
    imageUrl:
      'https://media.istockphoto.com/id/1257594256/vector/walking-far-footprints-outgoing-footsteps-perspective-trail-walk-away-human-foot-steps.jpg?s=612x612&w=0&k=20&c=NKmqmGHwPj08aX4aC0XsOr0_oqxxo-7IdgfXPORUsPU=',
  },
];
