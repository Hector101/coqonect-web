import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { useObserver } from 'mobx-react-lite';

import SideMenuLinks from 'src/components/SharedLayout/Sidebar/SideMenuLinks';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const { Logo } = SVGS;

// store
import { useStore } from 'src/store';

type Props = {
  isMobile?: boolean;
  isAdminDashboard?: boolean;
};

const SidebarContent: FunctionComponent<Props> = ({ isMobile, isAdminDashboard }) => {
  const { uiStore } = useStore();

  const hideMenuTextClassName = classnames('f5 b ml2 black-90', {
    dn: !uiStore.sideMenuOpened && !isMobile,
  });

  const logoClassName = classnames('c-logo-section pa3 flex items-center', {
    'justify-center': !uiStore.sideMenuOpened && !isMobile,
    'justify-start': uiStore.sideMenuOpened || isMobile,
  });

  return useObserver(() => (
      <div className="c-SidebarContent">
        <div className={logoClassName}>
          <a className="inline-flex items-center">
            <Logo className="fill-cyan c-logo" />
            <span className={hideMenuTextClassName}>CoQonect</span>
          </a>
        </div>
        <SideMenuLinks isMobile={isMobile} isAdminDashboard={isAdminDashboard} />
      </div>
  ));
};

export default SidebarContent;
