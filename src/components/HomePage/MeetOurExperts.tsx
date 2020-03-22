import React, { FunctionComponent } from 'react';

import Slider from 'src/components/Shared/Slider';
import ExpertCard from 'src/components/HomePage/ExpertCard';

const MeetOurExperts: FunctionComponent<{}> = () => {
  return (
    <section className="c-MeetOurExperts">
      <div className="mh3 mh5-ns mv5">
        <h4 className="title tc">Meet Our Experts</h4>
        <Slider>
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
