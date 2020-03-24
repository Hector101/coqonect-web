import React from 'react';
import { observer } from 'mobx-react-lite';

import Plain from 'src/components/Containers/Plain';
import Navbar from 'src/components/Navbar';
import MobileSidebar from 'src/components/Sidebar/MobileSidebar';
import HomePage from 'src/components/HomePage';
import HomePageDeskTopNavbar from 'src/components/Navbar/HomePageDeskTopNavbar';
import HomePageMobileNavbar from 'src/components/Navbar/HomePageMobileNavbar';

import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

import { useStore } from 'src/store';

const Index: INextFunctionalComponent<{}> = () => {
  const { uiStore } = useStore();

  const _toggleSideMenu = () => {
    uiStore.toggleSideMenu();
  };

  return (
    <Plain title="Home | CoQonect">
      <Navbar isExpanded={uiStore.sideMenuOpened} toggleMenu={_toggleSideMenu}>
        <HomePageDeskTopNavbar />
      </Navbar>
      <MobileSidebar isExpanded={!uiStore.sideMenuOpened} toggleMenu={_toggleSideMenu}>
        <HomePageMobileNavbar />
      </MobileSidebar>
      <div className="c-IndexContent">
        <HomePage />
      </div>
    </Plain>
  );
};

export default observer(Index);
