import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Button from 'src/components/Shared/Button';
import LazyLoadImage from 'src/components/Shared/LazyLoadImage';
import LoadingPage from 'src/components/Shared/LoadingPage';

import truncateText from 'src/lib/truncateText';

import EdirPencil from '../../../public/svgs/EditPencil.svg';
import Gear from '../../../public/svgs/Gear.svg';
import Mentorship from '../../../public/svgs/Mentorship.svg';
import Verify from '../../../public/svgs/Verify.svg';
import RightArrow from '../../../public/svgs/RightArrow.svg';
import Plus from '../../../public/svgs/Plus.svg';
import DownArrow from '../../../public/svgs/DownArrow.svg';
import EmptyStar from '../../../public/svgs/EmptyStar.svg';
import FullStar from '../../../public/svgs/FullStar.svg';

import { ProfileUseQueryProps } from 'src/types';

const AUTHENTICATED_USER = gql`
  query {
    client {
      authenticatedUser {
        profile {
          fullName
          imageUrl
          city
          country
          bio
        }
      }
    }
  }
`;

const Profile: FunctionComponent<{}> = () => {
  const{ data, loading } = useQuery<ProfileUseQueryProps>(AUTHENTICATED_USER);

  if (loading || !data) {
    return <LoadingPage />;
  }

  const { fullName, imageUrl,  bio, city, country } = data.client.authenticatedUser.profile;

  return (
    <div className="ph4">
      <section className="bb b--black-10 pv3 flex flex-column flex-row-ns items-center justify-between">
        <div className="flex items-center w-100 w-50-ns">
          <div className="relative w4 h4">
            <LazyLoadImage
              srcName={imageUrl}
              fallbackIconName="ProfilePic"
              className="w4 h4 br-100"
            />
            <span className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
              <EdirPencil className="w1 h1 fill-white"/>
            </span>
          </div>
          <div className="ml3 ml4-ns">
            <h4 className="mv2 ttc">{fullName}</h4>
            <span className="f7">
              {city}
              {', '}
              {country}
            </span>
            <div className="pv1">
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={3}
                readonly={true}
              />
            </div>
          </div>
        </div>
        <div className="w-100 w-50-ns">
          <article className="mw5 mw6-ns br1 hidden ba b--black-10 mv4">
            <h2 className="f5 bg-near-white br1 br--top black-80 mv0 pv2 ph3 ttu">More About Me</h2>
            <div className="pv2 ph3 bt b--black-10">
              <p className="f7 f6-ns lh-copy measure">
                {
                  bio
                    ? truncateText(bio, 300)
                    : 'About Me description not added yet.'
                }
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="w-100 pv4">
        <div className="flex flex-column flex-row-ns items-center justify-between justify-around-ns pv4 tc ba b--black-10">
          <div>
            <div className="relative">
              <Gear className="w3 h3 fill-primary-blue"/>
              <Plus className="w1 h1 absolute bottom-0 right--1 fill-primary-blue" />
            </div>
            <p className="f7 f6-ns">ADD SKILLS</p>
          </div>
          <RightArrow className="w1 h1 dn db-ns" />
          <DownArrow className="w1 h1 dn-ns mb3" />
          <div>
            <Verify className="w3 h3 fill-primary-blue"/>
            <p className="f7 f6-ns">WE VERIFY THOSE SKILLS</p>
          </div>
          <RightArrow className="w1 h1 dn db-ns" />
          <DownArrow className="w1 h1 dn-ns mb3" />
          <div>
            <Mentorship className="w3 h3 fill-primary-blue"/>
            <p className="f7 f6-ns">OFFER MENTORSHIP ON VERIFIED SKILLS</p>
          </div>
        </div>
        <div className="pv5 flex justify-center">
          <Button className="bn br1 bg-primary-blue  white pointer f5 pv2 ph3" type="button">ADD SKILLS</Button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
