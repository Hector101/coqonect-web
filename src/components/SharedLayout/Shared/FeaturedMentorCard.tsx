import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';
import classnames from 'classnames';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  FullNameAvatar,
  FullStar,
  EmptyStar,
} = SVGS;

type Props = {
  withMarginRight?: boolean;
};

const FeaturedMentorCard: FunctionComponent<Props> = ({ withMarginRight }) => {
  const mainClassNames = classnames('w-100 w-25-ns pointer mv2 mv0-ns pv3 ph1 ba b--black-10 flex flex-column items-center', {
    'mr4-ns': withMarginRight,
  });

  return (
    <div className={mainClassNames}>
      <div>
        <FullNameAvatar className="w3 h3"/>
      </div>
      <div className="flex flex-column items-center">
        <span className="f5 mv2">Jane Michael</span>
        <div className="flex flex-column justify-center f7">
          <span className="bg-black-10 ph1 pv1 w-100 tc">VERIFIED SKILLS</span>
          <span className="ph1 pv1 bb b--black-10 w-100 tc">JavaScript</span>
          <span className="ph1 pv1 bb b--black-10 w-100 tc">Data Science</span>
          <span className="ph1 pv1 center w-100 tc black-50">More...</span>
        </div>
      </div>
      <div className="pv2">
        <Rating
          emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
          fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
          initialRating={4}
          readonly={true}
        />
      </div>
    </div>
  );
};

export default FeaturedMentorCard;
