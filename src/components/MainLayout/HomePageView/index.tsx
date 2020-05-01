import React, { FunctionComponent } from 'react';

import HeroSection from 'src/components/MainLayout/HomePageView/HeroSection';
import ExploreSkillCategory from 'src/components/MainLayout/HomePageView/ExploreSkillCategory';
import MeetOurExperts from 'src/components/MainLayout/HomePageView/MeetOurExperts';
import Testimonials from 'src/components/MainLayout/HomePageView/Testimonials';
import WhyJoinUs from 'src/components/MainLayout/HomePageView/WhyJoinUs';
import Footer from 'src/components/SharedLayout/Shared/Footer';

const HomePageView: FunctionComponent<{}> = () => {
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

export default HomePageView;
