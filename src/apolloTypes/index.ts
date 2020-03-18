// Mutation Types
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

// Query Types
export type TQuery = {
  client: TClientQuery;
};

export type TClientQuery = {
  authenticatedUser: TAuthenticatedUser;
  skillCategories: TSkillCategories[],
};

export type TAuthenticatedUser = {
  profile: TProfile;
  email: string;
};

export type TProfile = {
  fullName: string;
  imageUrl: string | null;
  city: string;
  country: string;
  bio: string | null;
};

export type TSkillCategories = {
  id: string;
  name: string;
  skills: TSkills[];
};

export type TSkills = {
  id: string;
  name: string;
};
