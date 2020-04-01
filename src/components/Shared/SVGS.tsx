import React, { FunctionComponent, ReactType } from 'react';

import ActiveSession from '../../../public/svgs/ActiveSession.svg';
import Avatar from '../../../public/svgs/Avatar.svg';
import CheckMark from '../../../public/svgs/CheckMark.svg';
import Close from '../../../public/svgs/Close.svg';
import Edit from '../../../public/svgs/Edit.svg';
import Email from '../../../public/svgs/Email.svg';
import ErrorLogo from '../../../public/svgs/Error.svg';
import FullNameAvatar from '../../../public/svgs/FullNameAvatar.svg';
import Google from '../../../public/svgs/Google.svg';
import Help from '../../../public/svgs/Help.svg';
import Hide from '../../../public/svgs/Hide.svg';
import Home from '../../../public/svgs/Home.svg';
import LeftArrow from '../../../public/svgs/LeftArrow.svg';
import Lock from '../../../public/svgs/Lock.svg';
import Logo from '../../../public/svgs/Logo.svg';
import Logout from '../../../public/svgs/Logout.svg';
import MainMenu from '../../../public/svgs/MainMenu.svg';
import Mentor from '../../../public/svgs/Mentor.svg';
import Menu from '../../../public/svgs/Menu.svg';
import Notification from '../../../public/svgs/Notification.svg';
import Prohibition from '../../../public/svgs/Prohibition.svg';
import RightArrow from '../../../public/svgs/RightArrow.svg';
import Search from '../../../public/svgs/Search.svg';
import Setting from '../../../public/svgs/Setting.svg';
import Show from '../../../public/svgs/Show.svg';
import Recommended from '../../../public/svgs/Recommended.svg';
import Activity from '../../../public/svgs/Activity.svg';
import CityIcon from '../../../public/svgs/CityIcon.svg';
import LocationIcon from '../../../public/svgs/LocationIcon.svg';
import SeeMore from '../../../public/svgs/SeeMore.svg';
import Language from '../../../public/svgs/Language.svg';
import Communication from '../../../public/svgs/Communication.svg';
import Designs from '../../../public/svgs/Designs.svg';
import Programming from '../../../public/svgs/Programming.svg';

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
  CityIcon,
  LocationIcon,
  SeeMore,
  Language,
  Communication,
  Designs,
  Programming,
};

type Props = {
  name: string;
  className: string;
};

export const RenderSVG: FunctionComponent<Props> = ({ name, ...props }) => {
  const Icon = SVGS[name];
  return <Icon {...props} />;
};
