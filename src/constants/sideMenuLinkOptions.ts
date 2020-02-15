import { MenuList } from 'src/interfaces/SideMenuLink';

import redirect from 'src/lib/redirect';

import callApi from 'src/lib/callApi';

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
