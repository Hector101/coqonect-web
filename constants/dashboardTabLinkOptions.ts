import { LinkType } from 'interfaces/DashboardTabLink';

const dashboardTabLinkOptions: LinkType[] = [
  {
    href: '/dashboard',
    text: 'Reccommended Skills',
    iconName: 'Recommended',
  },
  {
    href: '/dashboard/all-skills',
    text: 'All Skills',
    iconName: 'Activity',
  },
];

export default dashboardTabLinkOptions;
