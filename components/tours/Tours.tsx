// import imageOne from '../public/ethiopian_wolves_ethiopian_AVZ.jpg';
// import imageTwo from '../public/tradition image 1.jpg';
// import imageThree from '../public/Travel to Omo Valley Tribes Children.jpg';
// import imageFour from '../public/Simien-Mountains-Ethiopia-563114-1920px-16x7.jpg';
// import imageFive from '../public/St-Trinity-Cathederal-Addis-Ababa-1.jpg';
import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';

export const Tours: React.FC<any> = ({ all_tours }) => {
  const router = useRouter();

  const handleSeeTour = (tourid: String) => {
    router.push(`/tours/${tourid}`);
  };

  return (
    <div className="flex flex-col gap-8 my-16">
      {all_tours?.map((tour: any, index: any) => {
        return (
          <div
            key={index}
            className="grid p-3 md:p-8 md:grid-cols-2 grid-cols-1 odd:bg-white even:bg-primaryColor odd:text-primaryColor even:text-white "
          >
            <div>
              <Image
                src={tour.imagePath}
                alt={tour.title}
                priority
                className="w-full md:w-[500px] h-[300px] md:h-[400px] border-transparent rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-around p-2 md:p-4">
              <h1 className="font-bold text-xl md:text-3xl py-3 md:py-0">{tour.title}</h1>
              <p className="font-normal text-md md:text-xl py-3 md:py-0">
                {tour.shortDescription}
              </p>
              <div className="w-40">
                <button onClick={() => handleSeeTour(tour.id)}>
                  <h5 className="border-4 font-bold font-monospace hover:border-black text-xl mt-1 p-1 w-40 items-center justify-center hover:scale-105 transition duration-400">
                    BOOK TOUR
                  </h5>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
