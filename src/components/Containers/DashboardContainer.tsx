import { FunctionComponent, ReactNode, useReducer } from 'react';
import classnames from 'classnames';

import Navbar from 'src/components/Navbar';
import MobileSidebar from 'src/components/Sidebar/MobileSidebar';
import DeskTopSidebar from 'src/components/Sidebar/DeskTopSidebar';
import DashboardNavbarContent from 'src/components/Navbar/DashboardNavbarContent';
import SidebarContent from 'src/components/Sidebar/SidebarContent';

// store
import { sideMenuReducer } from 'src/store/reducer';

// context
import { SideMenuContext } from 'src/store/contexts';

type Props = {
  children: ReactNode;
};

const DashboardContainer: FunctionComponent<Props> = ({ children }) => {
  const [isExpanded, sideMenuDispatcher] = useReducer(sideMenuReducer, true);

  const dashboardContentClassName = classnames('c-DashboardContainer', {
    'c-IsExpanded': !isExpanded,
  });

  return (
    <SideMenuContext.Provider value={isExpanded}>
      <Navbar toggleMenu={sideMenuDispatcher} isDashboard={true} isExpanded={isExpanded}>
        <DashboardNavbarContent />
      </Navbar>
      <DeskTopSidebar isExpanded={isExpanded}>
        <SidebarContent />
      </DeskTopSidebar>
      <MobileSidebar isDashboard={true}  isExpanded={!isExpanded} toggleMenu={sideMenuDispatcher}>
        <SidebarContent isMobile={true} />
      </MobileSidebar>
      <div className={dashboardContentClassName}>
        {children}
      </div>
    </SideMenuContext.Provider>
  );
};

export default DashboardContainer;
