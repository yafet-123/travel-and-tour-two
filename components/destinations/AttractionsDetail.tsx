import Image from 'next/image';
import { DestinationsType } from '../../types/types';

export const AttractionsDetail: React.FC<any> = (props) => {
  // console.log(props.currentCategory[0].title)
  const currentCategory = props.currentCategory[0];

  return (
    <div className="flex flex-col gap-8 my-12 text-center">
      <h2 className="md:text-5xl text-3xl font-bold text-primaryColor px-4">
        {currentCategory.title}
      </h2>
      {currentCategory?.category.map((place: any, index: any) => {
        return (
          <div
            key={index}
            className="grid md:grid-cols-2 grid-cols-1 gap-4 border-b-4 border-primaryColor justify-center mx-4 pb-5"
          >
            <div
              className={`${
                place.id % 2 === 0
                  ? 'md:order-last order-first md:justify-self-center'
                  : 'md:order-first order-last'
              } bg-white text-primaryColor`}
            >
              <h1 className="font-bold text-2xl">{place.title}</h1>
              <p className="font-semibold text-lg text-left">{place.detail}</p>
            </div>
            <div className="items-center justify-center md:p-4">
              <Image
                src={place.imageUrl}
                alt={place.title}
                priority
                width={500}
                height={400}
                className="md:w-full md:h-full"
              />
            </div>
          </div>
        );
      })}
      <div className=""></div>
    </div>
  );
};
