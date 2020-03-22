import React, { FunctionComponent } from 'react';

import HeroSection from 'src/components/HomePage/HeroSection';
import ExploreSkillCategory from 'src/components/HomePage/ExploreSkillCategory';
import MeetOurExperts from 'src/components/HomePage/MeetOurExperts';
import Testimonials from 'src/components/HomePage/Testimonials';
import JoinUs from 'src/components/HomePage/JoinUs';
import Footer from 'src/components/Footer';

const HomePage: FunctionComponent<{}> = () => {
  return (
    <div>
      <HeroSection />
      <ExploreSkillCategory />
      <MeetOurExperts />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
