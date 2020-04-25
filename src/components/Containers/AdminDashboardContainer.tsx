import { FunctionComponent, ReactNode, useEffect } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Paper from '@material-ui/core/Paper';

import Navbar from 'src/components/Navbar';
import MobileSidebar from 'src/components/Sidebar/MobileSidebar';
import DeskTopSidebar from 'src/components/Sidebar/DeskTopSidebar';
import AdminDashboardNavbarContent from 'src/components/Navbar/AdminDashboardNavbarContent';
import SidebarContent from 'src/components/Sidebar/SidebarContent';
import LoadingPage from 'src/components/Shared/LoadingPage';

// store
import { useStore } from 'src/store';

import { usePaperStyles } from 'src/styles/materiaStyles';

type Props = {
  children: ReactNode;
};

const AdminDashboardContainer: FunctionComponent<Props> = ({ children }) => {
  const { uiStore, userStore } = useStore();
  const router = useRouter();
  const classes = usePaperStyles();

  useEffect(() => {
    if (userStore.authCheckCompleted && !userStore.isAdmin) {
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
        <AdminDashboardNavbarContent />
      </Navbar>
      <DeskTopSidebar isExpanded={uiStore.sideMenuOpened}>
        <SidebarContent isAdminDashboard={true} />
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

export default observer(AdminDashboardContainer);
