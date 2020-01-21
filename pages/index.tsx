import React, { useReducer } from 'react';

import Plain from 'components/Containers/Plain';
import Navbar from 'components/Navbar';
import MobileSidebar from 'components/Sidebar/MobileSidebar';
import HomePage from 'components/HomePage';
import HomePageDeskTopNavbar from 'components/Navbar/HomePageDeskTopNavbar';
import HomePageMobileNavbar from 'components/Navbar/HomePageMobileNavbar';

import INextFunctionalComponent from 'interfaces/NextFunctionalComponent';

import { sideMenuReducer } from 'store/reducer';

const Index: INextFunctionalComponent<{}> = () => {
  const [isExpanded, sideMenuDispatcher] = useReducer(sideMenuReducer, false);

  return (
    <Plain title="Home | CoQonect">
      <Navbar isExpanded={isExpanded} toggleMenu={sideMenuDispatcher}>
        <HomePageDeskTopNavbar />
      </Navbar>
      <MobileSidebar isExpanded={isExpanded} toggleMenu={sideMenuDispatcher}>
        <HomePageMobileNavbar />
      </MobileSidebar>
      <div className="c-IndexContent">
        <HomePage />
      </div>
    </Plain>
  );
};

export default Index;
