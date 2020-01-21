import React, { FunctionComponent, ReactType } from 'react';

import ActiveSession from '../../static/svgs/ActiveSession.svg';
import Avatar from '../../static/svgs/Avatar.svg';
import CheckMark from '../../static/svgs/CheckMark.svg';
import Close from '../../static/svgs/Close.svg';
import Edit from '../../static/svgs/Edit.svg';
import Email from '../../static/svgs/Email.svg';
import ErrorLogo from '../../static/svgs/Error.svg';
import FullNameAvatar from '../../static/svgs/FullNameAvatar.svg';
import Google from '../../static/svgs/Google.svg';
import Help from '../../static/svgs/Help.svg';
import Hide from '../../static/svgs/Hide.svg';
import Home from '../../static/svgs/Home.svg';
import LeftArrow from '../../static/svgs/LeftArrow.svg';
import Lock from '../../static/svgs/Lock.svg';
import Logo from '../../static/svgs/Logo.svg';
import Logout from '../../static/svgs/Logout.svg';
import MainMenu from '../../static/svgs/MainMenu.svg';
import Mentor from '../../static/svgs/Mentor.svg';
import Menu from '../../static/svgs/Menu.svg';
import Notification from '../../static/svgs/Notification.svg';
import Prohibition from '../../static/svgs/Prohibition.svg';
import RightArrow from '../../static/svgs/RightArrow.svg';
import Search from '../../static/svgs/Search.svg';
import Setting from '../../static/svgs/Setting.svg';
import Show from '../../static/svgs/Show.svg';
import Recommended from '../../static/svgs/Recommended.svg';
import Activity from '../../static/svgs/Activity.svg';


interface ISvgs {
  [key: string]: ReactType<{}>;
}

export const SVGS: ISvgs = {
  ActiveSession,
  Avatar,
  CheckMark,
  Close,
  Edit,
  Email,
  ErrorLogo,
  FullNameAvatar,
  Google,
  Help,
  Hide,
  Home,
  LeftArrow,
  Lock,
  Logo,
  Logout,
  MainMenu,
  Mentor,
  Menu,
  Notification,
  Prohibition,
  RightArrow,
  Search,
  Setting,
  Show,
  Activity,
  Recommended,
};

type Props = {
  name: string;
  className: string;
};

export const RenderSVG: FunctionComponent<Props> = ({ name, ...props }) => {
  const Icon = SVGS[name];
  return <Icon {...props} />;
};
