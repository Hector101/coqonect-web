import React, { FunctionComponent } from 'react';

import SwipeableTextMobileStepper from 'src/components/Shared/Carousel';
import Button from 'src/components/Shared/Button';


const Testimonials: FunctionComponent<{}> = () => {
  return (
    <section className="c-TestimonialSection">
      <div>
        <h3 className="tc">Testimonials</h3>
      </div>
      <div className="flex flex-column flex-column-reverse flex-row-ns w-100 justify-between">
        <div className="c-TestimonialThought">
          <h5>What Our Mentees have to say, will interest you</h5>
          <p>With more than 2000</p>
          <p>mentorship session daily</p>
          <Button
            className="bn br1 bg-primary-blue  white pointer f7 pv2 ph3"
            type="button"
          >
            READ MORE STORIES
          </Button>
        </div>
        <div className="c-SwipeableTextMobileStepper w-50">
          <SwipeableTextMobileStepper />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
