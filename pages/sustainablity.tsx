import React from 'react';
import { MainHeader } from '../components/common/MainHeader';
// import { HeroSection } from "../components/home/HeroSection";
import { CommonHeroSection } from '../components/common/CommonHeroSection';
import { SustainablityDetail } from '../components/sustainablity/SustainablityDetail';

export default function Sustainablity() {
  return (
    <React.Fragment>
      <MainHeader title="Sustainablity" />
      {/* <CommonHeroSection  title="" subtitle="" cssStyle="sustainablity-background"/> */}
      <SustainablityDetail />
    </React.Fragment>
  );
}
