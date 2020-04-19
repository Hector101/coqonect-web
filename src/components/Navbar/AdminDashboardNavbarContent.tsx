import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import ImageAvatar from 'src/components/Shared/ImageAvatar';


import Notification from '../../../public/svgs/Notification.svg';


const AdminDashboardNavbarContent: FunctionComponent<{}> = () => {
  return (
    <div className="c-DashboardNavbarContent flex justify-end items-center z-3">
      <ul className="flex justify-between items-center list">
        <li className="mr3 dib">
          <Link href="/admin/notifications">
              <a className="pointer relative">
                <span className="absolute bg-orange w05 h05 br-100 right-0"/>
                <Notification className="w1 h1" />
              </a>
            </Link>
        </li>
        <li className="mr3 dib ttc">
          <div className="inline-flex justify-center items-center pointer link">
            <ImageAvatar
              src={null}
            />
            <span className="f7 f6-ns ml2">Admin</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboardNavbarContent;
