import React, { FunctionComponent } from 'react';

import Logo from '../../../public/svgs/Logo.svg';

const HomePageMobileNavbar: FunctionComponent<{}> = () => {

  return (
    <div className="c-HomePageMobileNavbar flex flex-column justify-between items-center">
      <div className="pa3 w-100 bb b--black-10">
        <a className="flex items-center pointer">
          <Logo className="c-LogoIcon" />
          <span className="c-LogoText b" >CoQonect</span>
        </a>
      </div>
      <div className="w-100">
        <ul className="list w-100 flex flex-column justify-center items-start pl0">
          <li className="c-NavLinks w-100 pointer pa3 bb b--black-10">
            <a className="link black">Explore Skill Categories</a>
          </li>
          <li className="c-NavLinks w-100 pointer pa3 bb b--black-10">
            <a href="#meet-our-experts" className="link black">Meet Our Experts</a>
          </li>
          <li className="c-NavLinks w-100 pointer pa3 bb b--black-10">
            <a href="#testimonials" className="link black">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePageMobileNavbar;
