import { MenuList } from 'interfaces/SideMenuLink';

import redirect from 'lib/redirect';

import callApi from 'lib/callApi';

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
        route: '/profile',
        value: 'Profile',
        iconName: 'Avatar',
        selectable: true,
      },
      {
        route: '/active-session',
        value: 'Active Sessions',
        iconName: 'ActiveSession',
        selectable: true,
      },
      {
        route: '/mentors',
        value: 'Featured Mentors',
        iconName: 'Mentor',
        selectable: true,
      },
      {
        route: '/notifications',
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
        route: '/help',
        value: 'Help',
        iconName: 'Help',
        selectable: true,
      },
      {
        route: '/login',
        value: 'Logout',
        iconName: 'Logout',
        selectable: false,
        onClick: async () => {
          const response = await callApi({
            url: '/api/v1/logout',
            method: 'get',
          });

          if (response.success) {
            redirect({}, '/login');
          }
        },
      },
    ],
  },
];

export default sideMenuLinkOptions;
