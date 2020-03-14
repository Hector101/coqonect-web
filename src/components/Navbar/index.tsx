import React, { FunctionComponent, ReactNode, Dispatch } from 'react';
import classnames from 'classnames';

// types valadators
import { Action } from 'src/interfaces/Action';

import Menu from '../../../public/svgs/Menu.svg';

type Props = {
  toggleMenu: Dispatch<Action>;
  children: ReactNode;
  isDashboard?: boolean;
  isExpanded: boolean;
};

const Navbar: FunctionComponent<Props> = ({ toggleMenu, children, isDashboard, isExpanded }) => {
  const _handleToggleMenu = () => {
    toggleMenu({ type: 'toggle' });
  };

  const rootClassNames = classnames('c-Navbar flex items-center justify-between fixed top-0 left-0 pa0 bg-white bb b--black-10 z-1', {
    'c-IsDashboard': isDashboard,
    'c-IsExpanded': isExpanded,
  });

  const menuClassName = classnames('pointer', {
    'dn-ns': !isDashboard,
  });

  return (
    <nav className={rootClassNames}>
      <div onClick={_handleToggleMenu} className={menuClassName}>
        <Menu className="w1 h1 ma3"/>
      </div>
      <div className="w-100 c-NavbarContent mw8 center pr5">{children}</div>
    </nav>
  );
};

export default Navbar;
