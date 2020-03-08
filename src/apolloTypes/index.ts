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

export type Client = {
  authenticatedUser: TAuthenticatedUser;
};

export type TProfileUseQueryProps = {
  client: Client;
};
