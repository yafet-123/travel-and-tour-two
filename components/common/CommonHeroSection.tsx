import React from 'react';
import { HeroContentOne } from '../../types/types';

export const CommonHeroSection: React.FC<HeroContentOne> = ({
  title,
  subtitle,
  cssStyle,
  //   isDestinations,
  //   destinationType,
  //   setCurentAttraction
}) => {
  return (
    <div
      className={`flex justify-center items-center bg-fixed h-[600px] bg-cover top-10 ${cssStyle}`}
    >
      <div className="flex flex-col gap-8 font-bold text-center md:p-12">
        <div>
          <h1 className="text-white text-3xl md:text-6xl m-4">{title}</h1>
        </div>
        <div>
          <h1 className="text-white text-xl md:text-3xl m-4">{subtitle}</h1>
        </div>
      </div>
    </div>
  );
};
