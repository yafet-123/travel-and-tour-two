import { MainHeader } from '../components/common/MainHeader';
import { CommonHeroSection } from '../components/common/CommonHeroSection';
import { ContactUsSeciton } from '../components/contactus/ContactUsSection';

export default function ContactUs() {
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Contact Us" />
      <CommonHeroSection
        title="WE LOVE TO HEAR FROM YOU"
        subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum."
        cssStyle="about-us-background "
      />
      <ContactUsSeciton />
    </div>
  );
}
