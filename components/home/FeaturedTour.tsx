// import featureImageTwo from '../public/Intrepid Travel-Ethiopia_Lalibela_Pilgrim-outside-Bete-Golgota-Selassié-Church-1.jpg';
// import featureImageOne from '../public/Travel to Omo Valley Tribes Children.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { ToursObject } from '../types/types';

export const Featured: React.FC<any> = ({ featuredTours }) => {
  // console.log(featuredTours)

  return (
    <section className="flex flex-col justify-center items-center text-center bg-white">
      <h1 className="text-center text-3xl md:text-5xl font-sans leading-10 font-bold text-primaryColor mb-12">
        FEATURED TOURS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-4 gap-10 md:gap-4 text-center ">
        {featuredTours?.map((data: any, index: any) => (
          <div
            key={index}
            className="rounded-2xl hero-background md:w-full h-64 md:h-80 flex flex-col items-center
            justify-between py-5 text-center p-2 hover:scale-105 transition duration-300 "
          >
            <h3 className="w-full text-lg md:text-xl font-sans  font-bold text-white">
              {data.title}
            </h3>
            <div className="text-left">
              <p className="w-full text-md md:text-lg font-sans leading-8  text-white">
                <span className="font-bold">Transportation</span>:{' '}
                {data.transportation}
              </p>
              <p className="w-full text-md md:text-lg font-sans leading-8  text-white">
                <span className="font-bold">Duration</span>: {data.duration}
              </p>
              <p className="w-full text-md md:text-lg font-sans leading-8  text-white">
                <span className="font-bold">Accommodation</span>:{' '}
                {data.accommodation}
              </p>
            </div>

            <button
              className="bottom-5 font-sans font-semibold md:text-lg text-md  py-1 md:py-2 px-5 bg-primaryColor
             hover:bg-white text-white hover:text-primaryColor border-2 border-white rounded-md"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="items-center justify-center mt-10 font-sans font-extrabold text-2xl my-3 py-2 inline-flex px-5 bg-primaryColor hover:bg-white text-white hover:text-primaryColor border-2 border-black rounded-md">
          <h1 className="mr-2">More Tours</h1>{' '}
          <span>
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};
