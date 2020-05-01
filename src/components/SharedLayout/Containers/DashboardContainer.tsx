import { FunctionComponent, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Paper from '@material-ui/core/Paper';

import Navbar from 'src/components/SharedLayout/Navbar';
import MobileSidebar from 'src/components/SharedLayout/Sidebar/MobileSidebar';
import DeskTopSidebar from 'src/components/SharedLayout/Sidebar/DeskTopSidebar';
import DashboardNavbarContent from 'src/components/SharedLayout/Navbar/DashboardNavbarContent';
import SidebarContent from 'src/components/SharedLayout/Sidebar/SidebarContent';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

import { usePaperStyles } from 'src/styles/materiaStyles';

// store
import { useStore } from 'src/store';

type Props = {
  children: ReactNode;
};

const DashboardContainer: FunctionComponent<Props> = ({ children }) => {
  const { uiStore, userStore } = useStore();
  const router = useRouter();
  const classes = usePaperStyles();

  useEffect(() => {
    if (userStore.authCheckCompleted && !userStore.authenticated) {
      router.push('/auth/login');
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
        <Paper elevation={0} className={classes.paper}>
          {children}
        </Paper>
      </div>
    </>
  );
};

export default observer(DashboardContainer);
