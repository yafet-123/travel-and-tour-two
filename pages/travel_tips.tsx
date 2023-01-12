import React from 'react';
import { CommonHeroSection } from '../components/common/CommonHeroSection';
import { MainHeader } from '../components/common/MainHeader';
import { TravelTips } from '../components/traveltips/TravelTips';

export default function TravelTipsPage() {
  return (
    <React.Fragment>
      <MainHeader title="Travel Tips" />
      <CommonHeroSection
        title="Read Our Travel Tips"
        subtitle=""
        cssStyle="hero-background"
      />
      <TravelTips />
    </React.Fragment>
  );
}
