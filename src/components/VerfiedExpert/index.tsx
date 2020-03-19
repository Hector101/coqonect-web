import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';

// import SkillCategoryCard from 'src/components/Shared/SkillCategoryCard';
import Card from 'src/components/Shared/Card';
import Button from 'src/components/Shared/Button';

import FullNameAvatar from '../../../public/svgs/FullNameAvatar.svg';
import EmptyStar from '../../../public/svgs/EmptyStar.svg';
import FullStar from '../../../public/svgs/FullStar.svg';


const VerifiedExpert: FunctionComponent<{}> = () => {
  return (
    <div className="">
      <section className="c-VerifiedExpertSection">
        <div>
          <h3 className="tc">Meet Our Verified Experts</h3>
        </div>
        <div className="flex-ns w-100 justify-between">
          <Card>
            <FullNameAvatar className="w2 h2"/>
            <p>John Doe</p>
            <p>JavaScript</p>
            <div>
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={4}
                readonly={true}
              />
              <Button
                type="button"
                filled={true}
                primaryColor={true}
                className="c-ViewProfileButton f5 b white"
              >
                View Profile
              </Button>
            </div>
          </Card>

          <Card>
            <FullNameAvatar className="w2 h2"/>
            <p>John Doe</p>
            <p>JavaScript</p>
            <div>
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={4}
                readonly={true}
              />
              <Button
                type="button"
                filled={true}
                primaryColor={true}
                className="c-GetStartedButton f5 b white db"
              >
                View Profile
              </Button>
            </div>
          </Card>

          <Card>
            <FullNameAvatar className="w2 h2"/>
            <p>John Doe</p>
            <p>JavaScript</p>
            <div>
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={4}
                readonly={true}
              />
              <Button
                type="button"
                filled={true}
                primaryColor={true}
                className="c-GetStartedButton f5 b white"
              >
                View Profile
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default VerifiedExpert;
