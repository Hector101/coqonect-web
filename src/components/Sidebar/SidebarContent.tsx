import React, { FunctionComponent, useContext } from 'react';
import classnames from 'classnames';

import SideMenuLinks from 'src/components/Sidebar/SideMenuLinks';

import Logo from '../../../public/svgs/Logo.svg';

// context
import { SideMenuContext } from 'src/store/contexts';

type Props = {
  isMobile?: boolean;
};

const SidebarContent: FunctionComponent<Props> = ({ isMobile }) => {
  const isExpanded = useContext(SideMenuContext);

  const hideMenuTextClassName = classnames('f5 b ml2 black-90', {
    dn: !isExpanded && !isMobile,
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

export default SidebarContent;
