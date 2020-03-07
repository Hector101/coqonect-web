import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import SideMenuLinks from 'src/components/Sidebar/SideMenuLinks';

import Logo from '../../../public/svgs/Logo.svg';

// context
import { useStore } from 'src/store';

type Props = {
  isMobile?: boolean;
};

const SidebarContent: FunctionComponent<Props> = ({ isMobile }) => {
  const { uiStore } = useStore();

  const hideMenuTextClassName = classnames('f5 b ml2 black-90', {
    dn: !uiStore.sideMenuOpened && !isMobile,
  });

  return (
      <div className="c-SidebarContent">
        <div className="c-logo-section pa3 flex items-center">
          <a className="inline-flex items-center">
            <Logo className="w2 h2 fill-cyan" />
            <span className={hideMenuTextClassName}>CoQonect</span>
          </a>
        </div>
        <SideMenuLinks isMobile={isMobile} />
      </div>
  );
};

export default observer(SidebarContent);
