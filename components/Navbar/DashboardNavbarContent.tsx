import React, { FunctionComponent } from 'react';

import Button from 'components/Shared/Button';

import Notification from '../../static/svgs/Notification.svg';

const DashboardNavbarContent: FunctionComponent<{}> = () => {
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
            <a className="inline-flex justify-center items-center pointer">
              <img src="/static/svgs/FullNameAvatar.svg" className="w15 h15"/>
              <span className="f7 f6-ns ml2">Hector Johnson</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbarContent;
