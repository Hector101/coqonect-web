import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import Button from 'src/components/Shared/Button';
import LazyLoadImage from 'src/components/Shared/LazyLoadImage';

import { TQuery, TProfile } from 'src/apolloTypes';

import Notification from '../../../public/svgs/Notification.svg';

import { AUTHENTICATED_USER } from 'src/queries';

const DashboardNavbarContent: FunctionComponent<{}> = () => {
  const{ data, loading } = useQuery<TQuery>(AUTHENTICATED_USER);

  const renderStaticNavContents = (optionalProps?: TProfile) => (
    <div className="c-DashboardNavbarContent flex justify-end items-center z-3">
      <ul className="flex justify-between items-center list">
        <li className="mr3 dib">
          <Button
            type="button"
            className="pv2 ph3 mr2 f6 br1 bn white bg-primary-blue dn db-ns"
          >
            Request Mentorship
          </Button>
        </li>
        <li className="mr3 dib">
          <Link href="/dashboard/notifications">
              <a className="pointer relative">
                <span className="absolute bg-orange w05 h05 br-100 right-0"/>
                <Notification className="w1 h1" />
              </a>
            </Link>
        </li>
        <li className="mr3 dib ttc">
          {
            optionalProps ? (
              <Link href="/dashboard/profile">
                <a className="inline-flex justify-center items-center pointer link">
                  <LazyLoadImage
                    srcName={optionalProps.imageUrl}
                    fallbackIconName="ProfilePic"
                    className="w15 h15 br-100 ba b--black-20"
                  />
                  <span className="f7 f6-ns ml2">{optionalProps.fullName}</span>
                </a>
              </Link>
            ) : 'Loading...'
          }
        </li>
      </ul>
    </div>
  );

  if (!data || loading) {
    return  renderStaticNavContents();
  }

  return renderStaticNavContents(data.client.authenticatedUser.profile);
};

export default DashboardNavbarContent;
