export type LinkType = {
  route: '/app/dashboard'
  | '/app/profile'
  | '/app/active-session'
  | '/app/mentors'
  | '/app/notifications'
  | '/app/help'
  | '/auth/login'
  | '/admin/review-skills'
  | '/admin/manage-admin';
  value: string;
  iconName: string;
  selectable: boolean;
  onClick?: () => void;
};

export type MenuList = {
  categoryName: string;
  iconName: string;
  links: LinkType[];
};
