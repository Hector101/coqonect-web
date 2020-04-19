import { MenuList } from 'src/interfaces/SideMenuLink';

const adminSideMenuLinkOptions: MenuList[] = [
  {
    categoryName: 'MAIN MENU',
    iconName: 'MainMenu',
    links: [
      {
        route: '/admin',
        value: 'Dashboard',
        iconName: 'Home',
        selectable: true,
      },
      {
        route: '/admin/manage-admin',
        value: 'Manage Admin',
        iconName: 'Avatar',
        selectable: true,
      },
      {
        route: '/admin/notifications',
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
        route: '/login',
        value: 'Logout',
        iconName: 'Logout',
        selectable: false,
      },
    ],
  },
];

export default adminSideMenuLinkOptions;
