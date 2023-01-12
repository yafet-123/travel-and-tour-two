import { MainHeader } from '../components/common/MainHeader';
import { CommonHeroSection } from '../components/common/CommonHeroSection';
import { AboutEthiopia } from '../components/ethiopia/AboutEthiopia';

export default function Ethiopia() {
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="About Ethiopia" />
      <CommonHeroSection
        title="About Ethiopia"
        subtitle="Ethiopia may not be the first place you think of when booking your next holiday, but it should be. The country has been developing and its economy is one of the fastest growing in the world."
        cssStyle="ethiopia-background"
      />
      <AboutEthiopia />
    </div>
  );
}
