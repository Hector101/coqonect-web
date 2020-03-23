import React, { FunctionComponent } from 'react';

import HeroSection from 'src/components/HomePage/HeroSection';
import ExploreSkillCategory from 'src/components/HomePage/ExploreSkillCategory';
import MeetOurExperts from 'src/components/HomePage/MeetOurExperts';
import Testimonials from 'src/components/HomePage/Testimonials';
import WhyJoinUs from 'src/components/HomePage/WhyJoinUs';
import Footer from 'src/components/Footer';

const HomePage: FunctionComponent<{}> = () => {
  return (
    <div>
      <HeroSection />
      <ExploreSkillCategory />
      <MeetOurExperts />
      <Testimonials />
      <WhyJoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
