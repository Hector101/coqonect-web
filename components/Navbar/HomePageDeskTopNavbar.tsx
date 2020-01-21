import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import Button from 'components/Shared/Button';

import Logo from '../../static/svgs/Logo.svg';

const HomePageDeskTopNavbar: FunctionComponent<{}> = () => {

  return (
    <div className="c-HomePageDeskTopNavbar flex justify-end justify-between-ns items-center">
      <a className="flex-ns dn items-center pointer">
        <Logo className="c-LogoIcon" />
        <span className="b c-LogoText" >CoQonect</span>
      </a>
      <div className="flex justify-center items-center">
        <ul className="list flex-ns dn justify-center items-center">
          <li className="c-NavLinks pointer"><a>Meet Our Experts</a></li>
          <li className="c-NavLinks pointer"><a>How It Works</a></li>
          <li className="c-NavLinks pointer"><a>Explore Skill Categories</a></li>
          <li className="c-NavLinks pointer"><a>Testimonials</a></li>
        </ul>
        <Link href="/login">
          <a className="link c-Link mr4">
            <Button type="button" primaryColor={true} className="f6 bg-white pv1 ph3">Login</Button>
          </a>
        </Link>
        <Link href="/signup">
          <a className="link c-Link">
            <Button type="button" filled={true} primaryColor={true} className="f6 pv1 ph3 white">Sign up</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePageDeskTopNavbar;
