import { MenuList } from 'src/interfaces/SideMenuLink';

const sideMenuLinkOptions: MenuList[] = [
  {
    categoryName: 'MAIN MENU',
    iconName: 'MainMenu',
    links: [
      {
        route: '/dashboard',
        value: 'Dashboard',
        iconName: 'Home',
        selectable: true,
      },
      {
        route: '/dashboard/profile',
        value: 'Profile',
        iconName: 'Avatar',
        selectable: true,
      },
      {
        route: '/dashboard/active-session',
        value: 'Active Sessions',
        iconName: 'ActiveSession',
        selectable: true,
      },
      {
        route: '/dashboard/mentors',
        value: 'Featured Mentors',
        iconName: 'Mentor',
        selectable: true,
      },
      {
        route: '/dashboard/notifications',
        value: 'Notifications',
        iconName: 'Notification',
        selectable: true,
      },
    ],
  },
  {
    categoryName: 'SETTINGS',
    iconName: 'Setting',
    links: [
      {
        route: '/dashboard/help',
        value: 'Help',
        iconName: 'Help',
        selectable: true,
      },
      {
        route: '/login',
        value: 'Logout',
        iconName: 'Logout',
        selectable: false,
      },
    ],
  },
];

export default sideMenuLinkOptions;
