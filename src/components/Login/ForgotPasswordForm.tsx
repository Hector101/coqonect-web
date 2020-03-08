import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { observer } from 'mobx-react-lite';

// Components
import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

// store
import { useStore } from 'src/store';

type ResetPasswordFormValues = {
  email: string;
};

type FormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
});

const ForgotPasswordForm: FunctionComponent<{}> = () => {
  const { uiStore, userStore } = useStore();

  const _handleForgotPassword = ({ email }: ResetPasswordFormValues, { setSubmitting, resetForm }: FormMethod) => {
    setSubmitting(true);

    userStore.handleForgotPassword(email);

    resetForm();
    setSubmitting(false);
  };

  const _toggleModal = () => {
    uiStore.toggleModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: _handleForgotPassword,
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

  return (
    <div className="pv4 ph2 w-100">
    <h2>Reset Password</h2>
    <p className="f6">
      Enter the email associated with your account and we'll send an email with instructions to reset your password.
    </p>
    <form onSubmit={handleSubmit} className="w-100">
      <div className="flex flex-column justify-center item-center w-100">
        <Input
          className="pv3 pr2 f6 input-reset bg-transparent w-100 mb1"
          defaultType="email"
          placeholder="Enter E-mail"
          name="email"
          value={values.email}
          leftIconName="Email"
          onChange={handleChange}
          handleBlur={handleBlur}
          error={errors.email}
        />
      </div>
      <Button
        disabled={!!(errors.email) || !values.email || isSubmitting}
        type="submit"
        className="bn white pointer f6 w-100 mt3 mb2 br2"
        filled={true}
        withFixedHeight={true}
      >
        Reset Password
      </Button>
      <a onClick={_toggleModal} className="lh-copy f6 pointer blue">
        Wait, I remember my password
      </a>
    </form>
  </div>
  );
};

export default observer(ForgotPasswordForm);
