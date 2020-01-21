import React, { FunctionComponent, Dispatch } from 'react';
import { Action } from 'interfaces/Action';
import classnames from 'classnames';

type Props = {
  isExpanded: boolean;
  toggleMenu: Dispatch<Action>;
  isDashboard?: boolean;
};

const Background: FunctionComponent<Props> = ({ isExpanded, toggleMenu, isDashboard }) => {
  const _handleToggle = () => {
    toggleMenu({ type: 'toggle' });
  };

  const rootClassName = classnames('c-Background w-100 h-100 fixed top-0 left-0 z-3', {
    'c-IsDashboard': isDashboard,
    'o-100 c-Show': isExpanded,
    'o-0': !isExpanded,
  });

  return (
    <div
      onClick={_handleToggle}
      className={rootClassName}
    />
  );
};

export default Background;
