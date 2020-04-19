import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import LazyLoadImage from 'src/components/Shared/LazyLoadImage';

import EmptyStar from '../../../public/svgs/EmptyStar.svg';
import FullStar from '../../../public/svgs/FullStar.svg';

const ExpertCard: FunctionComponent<{}> = () => {
  return (
    <div className="c-ExpertCard br1 bg-white">
      <div className="tc flex justify-center items-center">
        <LazyLoadImage
          src={null}
          className="w3 h3 br-100 ba b--black-10"
        />
      </div>
      <div className="tc">
        <Typography variant="subtitle1">
          Johnson Hector Okoro
        </Typography>
      </div>
      <div className="c-skills flex flex-column justify-between items-center">
        <Chip variant="outlined" size="small" label="JavaScript" />
        <Chip variant="outlined" size="small" label="Public Speaking" />
      </div>
      <div className="pv1 flex justify-center items-center blue pointer">
        <ExpandMoreIcon />
        More...
      </div>
      <div className="tc pv3">
        <Rating
          emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
          fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
          initialRating={4}
          readonly={true}
        />
      </div>
      <div className="tc">
        <Button
          variant="contained"
          color="default"
          className="c-view-profile-btn"
          endIcon={<ArrowForwardIcon />}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;
