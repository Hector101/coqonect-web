import React, { FunctionComponent, ReactNode, Dispatch } from 'react';

import Background from 'src/components/Sidebar/Background';

import { Action } from 'src/interfaces/Action';

import Close from '../../../public/svgs/Close.svg';

type Props = {
  isExpanded: boolean;
  toggleMenu: Dispatch<Action>;
  children: ReactNode;
  isDashboard?: boolean;
};

const MobileSidebar: FunctionComponent<Props> = ({ isExpanded, toggleMenu, children, isDashboard }) => {
  const _handleClose = () => {
    toggleMenu({ type: 'toggle' });
  };

  return (
    <>
      <Background isDashboard={isDashboard} isExpanded={isExpanded} toggleMenu={toggleMenu} />
      <div
        className={`c-MobileSidebar w-80 h-100 br b--black-10 pa1 bg-white fixed top-0 left-0 z-4 dn-ns ${isExpanded && 'c-Show'}`}
      >
        <div className="flex flex-column relative">
          <div onClick={_handleClose} className="absolute pointer top-0 right-0 pa2">
            <Close className="w1 h1" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
