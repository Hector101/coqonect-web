// Mutation Types
export type TMutation = {
  client: TClientMutation;
};

export type TClientMutation = {
  editProfile: TMessage;
  changePassword: TMessage;
  addUserSkill: TMessage;
};

export type TMessage = {
  message: string;
};

// Query Types
export type TQuery = {
  client: TClientQuery;
  public: TPublicQuery;
};

export type TClientQuery = {
  authenticatedUser: TAuthenticatedUser;
};

export type TPublicQuery = {
  skillCategories: TSkillCategories[],
};

export type TAuthenticatedUser = {
  profile: TProfile;
  email: string;
  skills: TSkills[];
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
  evidence: string;
  months: number;
  years: number;
  description: string;
  verified: boolean;
};
