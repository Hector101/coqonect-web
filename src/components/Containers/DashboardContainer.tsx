import { FunctionComponent, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import Navbar from 'src/components/Navbar';
import MobileSidebar from 'src/components/Sidebar/MobileSidebar';
import DeskTopSidebar from 'src/components/Sidebar/DeskTopSidebar';
import DashboardNavbarContent from 'src/components/Navbar/DashboardNavbarContent';
import SidebarContent from 'src/components/Sidebar/SidebarContent';
import LoadingPage from 'src/components/Shared/LoadingPage';

// store
import { useStore } from 'src/store';

type Props = {
  children: ReactNode;
};

const DashboardContainer: FunctionComponent<Props> = ({ children }) => {
  const { uiStore, userStore } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (userStore.authCheckCompleted && !userStore.authenticated) {
      router.push('/login');
    }
  }, [userStore.authCheckCompleted]);

  const dashboardContentClassName = classnames('c-DashboardContainer', {
    'c-IsExpanded': !uiStore.sideMenuOpened,
  });

  const _toggleSideMenu = () => {
    uiStore.toggleSideMenu();
  };

  if (!userStore.authCheckCompleted) {
    return <LoadingPage />;
  }

  return (
    <>
      <Navbar toggleMenu={_toggleSideMenu} isDashboard={true} isExpanded={uiStore.sideMenuOpened}>
        <DashboardNavbarContent />
      </Navbar>
      <DeskTopSidebar isExpanded={uiStore.sideMenuOpened}>
        <SidebarContent />
      </DeskTopSidebar>
      <MobileSidebar isDashboard={true}  isExpanded={!uiStore.sideMenuOpened} toggleMenu={_toggleSideMenu}>
        <SidebarContent isMobile={true} />
      </MobileSidebar>
      <div className={dashboardContentClassName}>
        {children}
      </div>
    </>
  );
};

export default observer(DashboardContainer);
