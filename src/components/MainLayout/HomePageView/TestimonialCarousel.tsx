import React, { FunctionComponent } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import { testimonials } from 'src/tempData/testimonials';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#eef0f0',
  },
}));

const TestimonialCarousel: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classnames(classes.root, 'ba b--black-10 br1 bg-white')}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents={true}
      >
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="w-100 flex flex-column-reverse flex-row-l items-center">
                <div className="w-100 w-50-l tc tl-ns pa4">
                  <div className="mb3">
                    <FormatQuoteIcon fontSize="large" className="c-formatQuoteIcon" />
                    <Typography variant="subtitle1">
                      {testimonial.testimony}
                    </Typography>
                  </div>
                  <Typography color="textSecondary">
                    - {testimonials[activeStep].name}
                  </Typography>
                </div>
                <div className="flex justify-center justify-end-l w-100 w-50-l tc tr-ns pa4">
                  <img className="w3 h3 br-100" src={testimonial.img} alt={testimonial.name} />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default TestimonialCarousel;
