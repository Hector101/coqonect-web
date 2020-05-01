import { MenuList } from 'src/interfaces/SideMenuLink';

const adminSideMenuLinkOptions: MenuList[] = [
  {
    categoryName: 'MAIN MENU',
    iconName: 'MainMenu',
    links: [
      {
        route: '/admin/review-skills',
        value: 'Review Skills',
        iconName: 'Home',
        selectable: true,
      },
      {
        route: '/admin/manage-admin',
        value: 'Manage Admin',
        iconName: 'Avatar',
        selectable: true,
      },
    ],
  },
  {
    categoryName: 'SETTINGS',
    iconName: 'Setting',
    links: [
      {
        route: '/auth/login',
        value: 'Logout',
        iconName: 'Logout',
        selectable: false,
      },
    ],
  },
];

export default adminSideMenuLinkOptions;
