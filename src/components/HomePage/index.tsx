import React, { FunctionComponent } from 'react';

import HeroSection from 'src/components/HomePage/HeroSection';
import SkillCategory from 'src/components/SkillCategory';
import VerifiedExpert from 'src/components/VerfiedExpert';
import Testimonials from 'src/components/Testimonials';
import JoinUs from 'src/components/JoinUs';
import Footer from 'src/components/Footer';

const HomePage: FunctionComponent<{}> = () => {
  return (
    <div>
      <HeroSection />
      <main>
        <SkillCategory />
        <VerifiedExpert />
        <Testimonials />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
