export type Profile = {
  fullName: string;
  imageUrl: string | null;
  city: string;
  country: string;
  bio: string | null;
};

export type AuthenticatedUser = {
  profile: Profile;
  email: string;
};

export type Client = {
  authenticatedUser: AuthenticatedUser;
};

export type ProfileUseQueryProps = {
  client: Client;
};
