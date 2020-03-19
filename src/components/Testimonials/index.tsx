import React, { FunctionComponent } from 'react';

import Button from 'src/components/Shared/Button';


const Testimonials: FunctionComponent<{}> = () => {
  return (
    <div className="">
      <section className="c-TestimonialSection">
        <div>
          <h3 className="tc">Testimonials</h3>
        </div>
        <div className="flex flex-column flex-column-reverse flex-row-ns w-100 justify-between">
          <div className="">
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
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
