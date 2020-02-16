import React, { useReducer } from 'react';

import Plain from 'src/components/Containers/Plain';
import Navbar from 'src/components/Navbar';
import MobileSidebar from 'src/components/Sidebar/MobileSidebar';
import HomePage from 'src/components/HomePage';
import HomePageDeskTopNavbar from 'src/components/Navbar/HomePageDeskTopNavbar';
import HomePageMobileNavbar from 'src/components/Navbar/HomePageMobileNavbar';

import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

import { sideMenuReducer } from 'src/store/reducer';

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
