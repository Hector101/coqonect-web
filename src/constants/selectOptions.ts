export type TStatusOptionType = {
  value: 'pending' | 'verified' | 'unverified';
  label: 'Pending' | 'Verified' | 'Unverified';
};

export type TUserOptionType = {
  value: 'name' | 'email';
  label: 'Name' | 'Email';
};

export const statusFilterOptions: TStatusOptionType[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'verified', label: 'Verified' },
  { value: 'unverified', label: 'Unverified' },
];

export const userFilterOptions: TUserOptionType[] = [
  { value: 'email', label: 'Email' },
  { value: 'name', label: 'Name' },
];
