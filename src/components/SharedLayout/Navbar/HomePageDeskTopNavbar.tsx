import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Button from 'src/components/SharedLayout/Shared/Button';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Logo,
} = SVGS;

import { useStore } from 'src/store';

const HomePageDeskTopNavbar: FunctionComponent<{}> = () => {
  const { userStore } = useStore();

  return (
    <div className="c-HomePageDeskTopNavbar flex justify-end justify-between-ns items-center ph4">
      <a className="flex-ns dn items-center pointer">
        <Logo className="c-LogoIcon" />
        <span className="b c-LogoText" >CoQonect</span>
      </a>
      <div className="flex justify-center items-center">
        <ul className="list flex-ns dn justify-center items-center">
          <li className="c-NavLinks pointer">
            <a className="link black">Explore Skill Categories</a>
          </li>
          <li className="c-NavLinks pointer">
            <a href="#meet-our-experts" className="link black">Meet Our Experts</a>
          </li>
          <li className="c-NavLinks pointer">
            <a href="#testimonials" className="link black">Testimonials</a>
          </li>
        </ul>
        {
          !userStore.authenticated
            ? (
              <>
                <Link href="/auth/login">
                  <a className="link c-Link mr4 br1">
                    <Button
                      type="button"
                      className="f6 bg-white pv2 ph3 ba b--black-30"
                    >
                      Login
                    </Button>
                  </a>
                </Link>
                <Link href="/auth/signup">
                  <a className="link c-Link">
                    <Button type="button" className="f6 pv2 ph3 bn br1 bg-cyan white">Sign up</Button>
                  </a>
                </Link>
              </>
            ) : (
              <Link href="/app/dashboard">
                <Tooltip title="Goto Dashboard" arrow={true}>
                  <a className="link pointer">
                    <AccountCircleIcon fontSize="large" color="primary" />
                  </a>
                </Tooltip>
              </Link>
            )
        }
      </div>
    </div>
  );
};

export default observer(HomePageDeskTopNavbar);
