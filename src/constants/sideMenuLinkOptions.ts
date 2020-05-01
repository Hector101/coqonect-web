import { MenuList } from 'src/interfaces/SideMenuLink';

const sideMenuLinkOptions: MenuList[] = [
  {
    categoryName: 'MAIN MENU',
    iconName: 'MainMenu',
    links: [
      {
        route: '/app/dashboard',
        value: 'Dashboard',
        iconName: 'Home',
        selectable: true,
      },
      {
        route: '/app/profile',
        value: 'Profile',
        iconName: 'Avatar',
        selectable: true,
      },
      {
        route: '/app/active-session',
        value: 'Active Sessions',
        iconName: 'ActiveSession',
        selectable: true,
      },
      {
        route: '/app/mentors',
        value: 'Mentors',
        iconName: 'Mentor',
        selectable: true,
      },
      {
        route: '/app/notifications',
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
        route: '/app/help',
        value: 'Help',
        iconName: 'Help',
        selectable: true,
      },
      {
        route: '/auth/login',
        value: 'Logout',
        iconName: 'Logout',
        selectable: false,
      },
    ],
  },
];

export default sideMenuLinkOptions;
