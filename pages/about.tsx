import React from 'react';
import { CommonHeroSection } from '../components/common/CommonHeroSection';
import { MainHeader } from '../components/common/MainHeader';
import { FollowingTheDream } from '../components/about/FollowingTheDream';
export default function AboutPage() {
  return (
    <React.Fragment>
      <MainHeader title="About" />
      <CommonHeroSection
        title="Different People - One Mission"
        subtitle={`Ecotravel Ethiopia was founded to offer environmentally-friendly
        tours. Our commitment is as reflected in our name offering tours
        with a softer footprint.`}
        cssStyle="hero-background"
      />
      <FollowingTheDream />
    </React.Fragment>
  );
}