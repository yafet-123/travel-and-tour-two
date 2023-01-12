import React from 'react';

export const TravelTips = () => {
  return (
    <React.Fragment>
      <div className="md:my-24 my-14">
        <h1 className="md:text-5xl text-3xl font-bold text-primaryColor text-center mb-8">
          Travel Tips
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:mx-12 justify-center gap-8 text-primaryColor">
          {TravelTipsData.map((tip) => {
            if (tip.id === 7) {
              return (
                <div
                  key={tip.id}
                  className="text-center flex flex-col border-4 border-primaryColor
                                                                    shadow-lg gap-2 p-4 items-center drop-shadow-xl"
                >
                  <h1 className="font-bold md:text-3xl text-2xl">
                    {tip.title}
                  </h1>
                  <p className="md:text-xl text-lg">{tip.detail}</p>
                  <div className="flex flex-row gap-16 mt-2">
                    <div>
                      <h1 className="md:text-xl font-bold text-lg">Drinks</h1>
                      <h1 className="md:text-lg font-semibold">
                        {tip.drinks?.water}
                      </h1>
                      <h1 className="md:text-lg font-semibold">
                        {tip.drinks?.beer}
                      </h1>
                    </div>
                    <div>
                      <h1 className="md:text-xl font-bold text-lg">
                        Lunch/Dinner
                      </h1>
                      <h1 className="md:text-lg font-semibold">
                        {tip.meals?.lunch}
                      </h1>
                      <h1 className="md:text-lg font-semibold">
                        {tip.meals?.dinner}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            } else if (tip.id === 8) {
              return (
                <div
                  key={tip.id}
                  className="border-4 border-primaryColor
                shadow-lg gap-2 p-4  drop-shadow-xl"
                >
                  <h1 className="font-bold md:text-3xl text-center text-2xl">
                    {tip.title}
                  </h1>
                  <ul>
                    <li className="text-lg">
                      <span className="md:text-xl font-bold text-lg">
                        Local Currency:{' '}
                      </span>
                      {tip.localCurreny}
                    </li>
                    <li className="text-lg">
                      <span className="md:text-xl font-bold text-lg">
                        Credit Card Acceptance:{' '}
                      </span>
                      {tip.creditCard}
                    </li>
                    <li className="text-lg">
                      <span className="md:text-xl font-bold text-lg">
                        ATM Availability:{' '}
                      </span>
                      {tip.atm}
                    </li>
                    <li className="text-lg">
                      <span className="md:text-xl font-bold text-lg">
                        Recommended Currency For Exchange:{' '}
                      </span>
                      {tip.recommended}
                    </li>
                    <li className="text-lg font-bold text-black">
                      <span className="md:text-xl font-bold text-lg">
                        N.B:{' '}
                      </span>
                      {tip.nb}
                    </li>
                  </ul>
                </div>
              );
            }
            return (
              <div
                key={tip.id}
                className="text-center flex flex-col border-4 border-primaryColor shadow-lg gap-2 p-4 items-center drop-shadow-xl"
              >
                <h1 className="font-bold md:text-3xl text-2xl">{tip.title}</h1>
                <p className="md:text-xl text-lg">{tip.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const TravelTipsData = [
  {
    id: 1,
    title: 'Daily Schedule',
    detail: `Most days involve around 8/9hrs on-the-go including sights/visits and activities, 
            comfort and lunch breaks, photo stops and drive-time, however on one or two days this 
            will extend out to 10+hrs. Days will generally start between 7:30 - 8:30 and reach or 
            return to our hotel between 16:00 - 17:00. However, the passing scene is always riveting, 
            with varied scenery and sites, and lots of animals and people going about their daily lives.`,
  },
  {
    id: 2,
    title: 'Transportation',
    detail: `Private mini/Coaster bus for the northern route and 4WD Land Cruisers for the offroads. 
            Roads can be tar sealed or shingle, sometimes bumpy and slow due to road works and/or rain 
            damage, although most of the time a reasonable pace can be maintained. Both 4WDs and the bus 
            are air-conditioned.`,
  },
  {
    id: 3,
    title: 'Luggage',
    detail: `A medium sized wheelie bag (no more than 65/70ltrs capacity, measuring 130/132 linear cm)
             works well, but for ease of handling please keep baggage as light as possible (12 -14kg).`,
  },
  {
    id: 4,
    title: 'Accommodations',
    detail: `Hotels/Lodges - Single/Twin/double rooms. Hotels / Lodges anticipated are essentially 
            3-5 stars in Addis Ababa. In some remote places hotels are basic and simplistic.`,
  },
  {
    id: 5,
    title: 'Clothing',
    detail: `Take light, summer clothes for the day time and something warm for the evenings, 
            like a sweater or jacket. The temperature drops quite rapidly towards sunset. Simian or Bale
            Mountains trekkers should bring warm clothes and water proofs for unexpected seasonal rains.`,
  },
  {
    id: 6,
    title: 'Weather',
    detail: `Daytime temperatures are mainly warm and comfortable but early morning and evenings in the 
            highlands can be cold. We recommend layers and a thick jumper or fleece, plus a lightweight wind/waterproof
            jacket. A hat is essential. Take swimwear if you plan to use the hotel's pools. Comfortable, good walking 
            shoes with ankle support are strongly recommended as well as comfortable sandals.`,
  },
  {
    id: 7,
    title: 'Meals',
    detail: `The costs for meals may vary depending upon location, type of restaurant and number of 
             courses eaten and so the prices given are an average guide. Local restaurants located off
             the beaten track may be less expensive, whereas an upmarket restaurant located in the center
             of a major city may charge more.`,
    drinks: {
      water: '$0.5-$1',
      beer: '$1-$2.5',
    },
    meals: {
      lunch: '$8-$15',
      dinner: '$10-$20',
    },
  },
  {
    id: 8,
    title: 'Currency',
    localCurreny: 'Ethiopian Birr (ETB)',
    creditCard:
      'Accepted in most of the hotels in major towns. Limited in the banks',
    atm: 'Available in most of the major',
    recommended: `It is advisable to take your spending money in Sterling, 
                Euros or US Dollars cash as high denomination notes usually get better exchange rates.`,
    nb: 'Travelers are not recommended to exchange foreign currencies without banks.',
  },
];
