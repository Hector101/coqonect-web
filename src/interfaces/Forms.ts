export type TFormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

export type TLoginFormValues = {
  email: string;
  password: string;
};

export type TSignupFormValues = {
  fullName: string;
  email: string;
  password: string;
};

export type TPasswordResetFormValues = {
  token: string;
  password: string;
};
