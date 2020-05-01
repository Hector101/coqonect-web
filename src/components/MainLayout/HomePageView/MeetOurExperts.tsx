import React, { FunctionComponent } from 'react';

import Slider from 'src/components/SharedLayout/Shared/Slider';
import ExpertCard from 'src/components/MainLayout/HomePageView/ExpertCard';

const MeetOurExperts: FunctionComponent<{}> = () => {
  return (
    <section className="c-MeetOurExperts" id="meet-our-experts">
      <div className="pa4">
        <h4 className="title tc mt0">Meet Our Experts</h4>
        <Slider
          numberOfSlide={4}
          autoplay={true}
          dots={true}
          infinite={true}
        >
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
        </Slider>
      </div>
    </section>
  );
};

export default MeetOurExperts;
