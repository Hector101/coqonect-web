import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';

import FullNameAvatar from '../../static/svgs/FullNameAvatar.svg';
import EmptyStar from '../../static/svgs/EmptyStar.svg';
import FullStar from '../../static/svgs/FullStar.svg';

const ReccommendedMentorshipCard: FunctionComponent<{}> = () => {
  return (
    <div className="w-30-ns h-100 pointer  ba b--black-10 mv4 mv0-ns">
      <div className="w-100 pv3 bg-black-10 flex items-center justify-between f6">
        <span className="ml2 b">JavaScript</span>
        <span className="mr2 b">Free</span>
      </div>
      <div className="pa3">
        <h4 className="mv1 blue">Intro to JavaScript</h4>
        <p className="f7 c-mentorship-description mb0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex mt3">
          <FullNameAvatar className="w2 h2"/>
          <div className="flex flex-column ml2">
            <span className="f7 black-50">Mentorship by</span>
            <span className="f7 mv2">John Doe Schevaski Daniel</span>
            <span>
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={4}
                readonly={true}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReccommendedMentorshipCard;
