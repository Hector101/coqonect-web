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

export type TEditProfile = {
  client: TClientMutation;
};

export type TClientMutation = {
  client: TMessage;
};

export type TMessage = {
  message: string;
};
