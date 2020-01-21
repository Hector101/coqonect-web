export type LinkType = {
  route: string;
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
