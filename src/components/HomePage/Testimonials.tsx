import React, { FunctionComponent } from 'react';

import Typography from '@material-ui/core/Typography';

import TestimonialCarousel from 'src/components/HomePage/TestimonialCarousel';

const Testimonials: FunctionComponent<{}> = () => {
  return (
    <section className="c-Testimonials" id="testimonials">
      <div className="pa4">
        <h4 className="title tc mt0">Testimonials</h4>
        <div className="w-100 flex flex-column flex-row-ns items-center justify-between">
          <div className="w-100 w-50-ns mv2 mv0-ns">
            <div className="w-100 br1 pa3">
              <Typography
                variant="h5"
                className="primary-blue"
              >
                  What Our Mentees have to say, will interest you?
              </Typography>
              <h5 className="mv2">With more than 2000 mentorship sessions daily.</h5>
            </div>
          </div>
          <div className="w-100 w-50-ns">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
