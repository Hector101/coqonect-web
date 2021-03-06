import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SVG from 'react-inlinesvg';
import { useObserver } from 'mobx-react-lite';

// Components
import Button from 'src/components/SharedLayout/Shared/Button';
import Input from 'src/components/SharedLayout/Shared/Input';

import { useStore } from 'src/store';

import { TSignupFormValues, TFormMethod } from 'src/interfaces/Forms';

const validationSchema = yup.object().shape({
  fullName: yup.string()
    .required('Required'),
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length'),
});

const SignupForm: FunctionComponent<{}> = () => {
  const { userStore, uiStore } = useStore();

  const _handleSignup = async (
    { fullName, email, password }: TSignupFormValues,
    { setSubmitting, resetForm }: TFormMethod) => {
    await userStore.handleSignup({ email, password, fullName },
      () => {
        uiStore.setSnackBarSuccessMessage(userStore.signupResponse.message);
      },
      () => {
        uiStore.setSnackBarErrorMessage(userStore.signupResponse.message);
      });

    resetForm();
    return setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    onSubmit: _handleSignup,
    validationSchema,
  });

  const {
    values,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = formik;

  return useObserver(() => (
    <form onSubmit={handleSubmit}>
      <div
        id="signup"
        className="ba b--transparent ph0 pb1 mh0"
      >
        <Input
          className="pv3 pr2 f6 input-reset bg-white w-100"
          containerClassName="mb3"
          defaultType="text"
          placeholder="Enter Full Name"
          name="fullName"
          value={values.fullName}
          leftIconName="FullNameAvatar"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fullName}
        />
        <Input
          className="pv3 pr2 f6 input-reset bg-white w-100"
          containerClassName="mv3"
          defaultType="email"
          placeholder="Enter E-mail"
          name="email"
          value={values.email}
          leftIconName="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Input
          className="pv3 f6 input-reset bg-white w-100"
          containerClassName="mv3"
          defaultType="password"
          customType="text"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          leftIconName="Lock"
          defaultRightIconName="Hide"
          customRightIconName="Show"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          autoComplete="on"
        />
      </div>
      <Button
        type="submit"
        className="pa3 white pointer f6 w-100 bn"
        disabled={
          !!(errors.password) ||
          !!(errors.email) ||
          !!(errors.fullName) ||
          !values.fullName ||
          !values.email ||
          !values.password ||
          isSubmitting}
        filled={true}
      >
        {isSubmitting ? <SVG src="/svgs/Loading.svg" className="w2 h2 c-LoadingWhite" /> : 'Signup'}
      </Button>
    </form>
  ));
};

export default SignupForm;
