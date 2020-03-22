import React, { FunctionComponent } from 'react';

import Slider from 'src/components/Shared/Slider';
import ExpertCard from 'src/components/HomePage/ExpertCard';

const MeetOurExperts: FunctionComponent<{}> = () => {
  return (
    <section className="c-MeetOurExperts">
      <div className="ph3 ph5-ns pv4">
        <h4 className="title tc mt0">Meet Our Experts</h4>
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
