import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  children: ReactNode;
  isExpanded: boolean;
};

const DeskTopSidebar: FunctionComponent<Props> = ({ children, isExpanded }) => {
  const rootClassName = classnames(`c-DeskTopSidebar br b--black-10
    h-100 bg-white fixed top-0 left-0 z-4 dn db-ns`, {
    'c-IsExpanded': isExpanded,
  });

  return (
      <div
        className={rootClassName}
      >
        <div className="flex flex-column relative">
          {children}
        </div>
      </div>
  );
};

export default DeskTopSidebar;
