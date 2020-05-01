import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import Button from 'src/components/SharedLayout/Shared/Button';
import UserProfileLink from 'src/components/SharedLayout/Navbar/UserProfileLink';

import { TQuery } from 'src/apolloTypes';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Notification,
} = SVGS;

import { AUTHENTICATED_USER } from 'src/queries';

const DashboardNavbarContent: FunctionComponent<{}> = () => {
  const{ data, loading } = useQuery<TQuery>(AUTHENTICATED_USER);

  return (
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
          <Link href="/app/notifications">
              <a className="pointer relative">
                <span className="absolute bg-orange w05 h05 br-100 right-0"/>
                <Notification className="w1 h1" />
              </a>
            </Link>
        </li>
        <li className="mr3 dib ttc">
          <UserProfileLink loading={loading} userData={data}  />
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbarContent;
