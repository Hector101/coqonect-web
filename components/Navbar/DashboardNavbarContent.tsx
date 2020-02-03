import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Button from 'components/Shared/Button';
import LazyLoadImage from 'components/Shared/LazyLoadImage';

import Notification from '../../static/svgs/Notification.svg';

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

const DashboardNavbarContent: FunctionComponent<{}> = () => {
  const{ data } = useQuery(AUTHENTICATED_USER);

  return (
    <div className="c-DashboardNavbarContent flex justify-end items-center z-3">
      <div className="flex justify-center items-center">
        <Button
          type="button"
          className="pv2 ph3 f6 br1 bn white bg-primary-blue dn db-ns"
        >
          Request Mentorship
        </Button>
        <ul className="flex justify-between items-center list">
          <li>
            <a className="mr4 pointer relative">
              <span className="absolute bg-orange w05 h05 br-100 right-0"/>
              <Notification className="w1 h1" />
            </a>
          </li>
          <li>
            <Link href="/profile">
              <a className="inline-flex justify-center items-center pointer link">
                <LazyLoadImage
                  srcName={data?.client?.authenticatedUser?.profile?.imageUrl}
                  fallbackIconName="ProfilePic"
                  className="w15 h15 br-100"
                />
                <span className="f7 f6-ns ml2">{data?.client?.authenticatedUser?.profile?.fullName}</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbarContent;
