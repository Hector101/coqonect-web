import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Button from 'components/Shared/Button';
import LazyLoadImage from 'components/Shared/LazyLoadImage';

import truncateText from 'lib/truncateText';

import EdirPencil from '../../static/svgs/EditPencil.svg';
import Gear from '../../static/svgs/Gear.svg';
import Mentorship from '../../static/svgs/Mentorship.svg';
import Verify from '../../static/svgs/Verify.svg';
import RightArrow from '../../static/svgs/RightArrow.svg';
import Plus from '../../static/svgs/Plus.svg';
import DownArrow from '../../static/svgs/DownArrow.svg';
import EmptyStar from '../../static/svgs/EmptyStar.svg';
import FullStar from '../../static/svgs/FullStar.svg';

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
  const{ data } = useQuery(AUTHENTICATED_USER);

  const bio = `${data?.client?.authenticatedUser?.profile?.bio}`;

  return (
    <div className="ph4">
      <section className="bb b--black-10 pv3 flex flex-column flex-row-ns items-start justify-between">
        <div className="flex items-center w-100 w-50-ns">
          <div className="relative w4 h4">
            <LazyLoadImage
              srcName={data?.client?.authenticatedUser?.profile?.imageUrl}
              fallbackIconName="ProfilePic"
              className="w4 h4 br-100"
            />
            <span className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
              <EdirPencil className="w1 h1 fill-white"/>
            </span>
          </div>
          <div className="ml3 ml4-ns">
            <h4 className="mv2">{data?.client?.authenticatedUser?.profile?.fullName}</h4>
            <span className="f7">
              {data?.client?.authenticatedUser?.profile?.city}
              {', '}  
              {data?.client?.authenticatedUser?.profile?.country}
            </span>
            <div className="pv1"> 
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-primary-blue" />}
                initialRating={3}
                readonly={true}
              /> 
            </div>
          </div>
        </div>
        <div className="w-100 w-50-ns">
          <h4>About Me</h4>
          <p className="f7 lh-copy pointer">
            {truncateText(bio, 300)}
          </p>
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
