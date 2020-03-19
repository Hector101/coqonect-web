export type TProfile = {
  fullName: string;
  imageUrl: string | null;
  city: string;
  country: string;
  bio: string | null;
};

export type TAuthenticatedUser = {
  profile: TProfile;
  email: string;
};

export type TClientQuery = {
  authenticatedUser: TAuthenticatedUser;
};

export type TProfileUseQueryProps = {
  client: TClientQuery;
};

export type TMutation = {
  client: TClientMutation;
};

export type TClientMutation = {
  editProfile: TMessage;
  changePassword: TMessage;
};

export type TMessage = {
  message: string;
};