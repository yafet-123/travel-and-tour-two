import imageTwo from '../../public/warriors.jpg';
import imageOne from '../../public/adey ababa.png';
import imageThree from '../../public/Addis-Ababa-Meskel-1.jpg';
import imageFour from '../../public/Ethiopia-Wildlife-Hero.jpg';
import imageFive from '../../public/lucy.jpeg';
import imageSix from '../../public/tradition image 1.jpg';
import Image from 'next/image';

const EthiopiaArray = [
  {
    id: 1,
    title: 'Thirteen Months to the Year',
    description:
      'Sure, plenty of cultures have their own calendars that they prefer to follow over the Western Gregorian one, but most still abide by the unspoken ’12 months to a year’ rule. Not Ethiopia. Ever looking to buck a trend, several thousand years ago the Ethiopians cottoned on to Spinal Tap’s belief that one more is always better – and have been counting 13 months to their year ever since. What does this mean?  That canny tourism boards can legitimately claim that the country really does boast ’13 months of sunshine’.',
    imagePath: imageOne,
  },
  {
    id: 2,
    title: 'Complete Independence',
    description:
      "Ethiopia is the oldest independent country in Africa and one of the world's oldest - it exists for at least 2,000 years. The country comprises more than 80 ethnic groups and as many languages. Primarily their shared independent existence unites Ethiopia's many nations. Unique among African countries, Ethiopia has never been colonized, one exception being the occupation by Italy in 1936-41.",
    imagePath: imageTwo,
  },
  {
    id: 3,
    title: 'A Nation of Religious Festivals',
    description:
      'Ethiopia is a country full of vibrant and colourful festivals. The biggest, Timket, is a three-day annual festival that honours the baptism of Jesus Christ in the river Jordan. Today the priests remove the ‘Tabots’ (replicas of the Ark of Covenant) from each church and march to the nearest water source, where the communal baptism takes place. The procession is accompanied by thousands of locals dressed in dazzling white traditional dress that contrasts with the colours of the ceremonial robes and sequined velvet umbrellas of the priests.',
    imagePath: imageThree,
  },
  {
    id: 4,
    title: 'Beautiful Nature',
    description:
      "Ethiopia is one of Africa's most beautiful countries and its landscapes are epic in both scale and beauty. Here is a place where you can trek more than 9800ft above sea level (the Simien and Bale mountains) or visit the lowest place on the African continent, the Danakil Depression. In between, there are lush highlands and stirring deserts, vertiginous canyons and sweeping savanna, vast lakes and high plateaus. If you look hard enough, you'll also find landmarks of great significance, from the source of the Blue Nile to, again, the mesmerizingly desolate Danakil Depression, peppered with an astonishing 25% of Africa’s active volcanoes.",
    imagePath: imageFour,
  },
  {
    id: 5,
    title: 'Historical Wonders',
    description:
      "Ethiopia, one of the oldest countries in the world, successfully resisted European colonialism throughout the centuries – it has retained much of its cultural identity and its story is one of Africa's most fascinating. It all begins with Lucy, one of our most celebrated ancient ancestors, moves effortlessly into the realm of ancient Aksum with its oblelisks and echoes of the Queen of Sheba, and then takes on power and passion as Christianity, with mysterious echoes of Ancient Israel, takes center stage. The ancients here left behind some extraordinary monuments to faith and power which serve as focal points for so many wonderful journeys.",
    imagePath: imageFive,
  },
  {
    id: 6,
    title: 'Proud Traditions',
    description:
      'When it comes to culture, Ethiopia has an embarrassment of riches. There are the Surmi, Afar, Mursi, Karo, Hamer, Nuer and Anuak, whose ancient customs and traditions have remained almost entirely intact. A highlight of any trip here is witnessing one of the many festivals that are an integral part of the traditional culture, from age-old ceremonies marking rites of passage to Christian celebrations of singular passion, the impact upon those who witness such events can provide travel memories to last a lifetime.',
    imagePath: imageSix,
  },
];

export const AboutEthiopia: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 my-16">
      {EthiopiaArray.map((ethiopia, index) => {
        return (
          <div
            key={index}
            className="grid p-12 md:grid-cols-2 grid-cols-1 text-white md:justify-center"
          >
            <div
              className={`${
                ethiopia.id % 2 === 0
                  ? 'md:order-last order-first md:justify-self-center'
                  : 'md:order-first order-last'
              } bg-white`}
            >
              <Image
                src={ethiopia.imagePath}
                alt={ethiopia.title}
                priority
                className="md:w-[500px] md:h-[450px]"
              />
            </div>

            <div className="flex flex-col p-6 gap-4 bg-primaryColor">
              <h1 className="font-bold text-xl md:text-3xl">
                {ethiopia.title}
              </h1>
              <p className="font-normal text-md md:text-xl">
                {ethiopia.description}
              </p>
            </div>
          </div>
        );
      })}
      <h1 className="text-center text-xl my-6 md:mx-12 mx-4 text-primaryColor font-semibold">
        When it comes to culture, Ethiopia has an embarrassment of riches. There
        are the Surmi, Afar, Mursi, Karo, Hamer, Nuer and Anuak, whose ancient
        customs and traditions have remained almost entirely intact. A highlight
        of any trip here is witnessing one of the many festivals that are an
        integral part of the traditional culture, from age-old ceremonies
        marking rites of passage to Christian celebrations of singular passion,
        the impact upon those who witness such events can provide travel
        memories to last a lifetime.
      </h1>
    </div>
  );
};
