import React from 'react';
import { useObserver } from 'mobx-react-lite';

import Plain from 'src/components/SharedLayout/Containers/Plain';
import Navbar from 'src/components/SharedLayout/Navbar';
import MobileSidebar from 'src/components/SharedLayout/Sidebar/MobileSidebar';
import HomePageView from 'src/components/MainLayout/HomePageView';
import HomePageDeskTopNavbar from 'src/components/SharedLayout/Navbar/HomePageDeskTopNavbar';
import HomePageMobileNavbar from 'src/components/SharedLayout/Navbar/HomePageMobileNavbar';

import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

import { useStore } from 'src/store';

const Index: INextFunctionalComponent<{}> = () => {
  const { uiStore } = useStore();

  const _toggleSideMenu = () => {
    uiStore.toggleSideMenu();
  };

  return useObserver(() => (
    <Plain title="Home | CoQonect">
      <Navbar isExpanded={uiStore.sideMenuOpened} toggleMenu={_toggleSideMenu}>
        <HomePageDeskTopNavbar />
      </Navbar>
      <MobileSidebar isExpanded={!uiStore.sideMenuOpened} toggleMenu={_toggleSideMenu}>
        <HomePageMobileNavbar />
      </MobileSidebar>
      <div className="c-IndexContent">
        <HomePageView />
      </div>
    </Plain>
  ));
};

export default Index;
