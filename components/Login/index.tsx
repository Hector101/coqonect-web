import React, { FunctionComponent, useState, useReducer } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import sweetalert from '@sweetalert/with-react';
import SVG from 'react-inlinesvg';

// Components
import SweetAlertContent from 'components/Shared/SweetAlertContent';
import ErrorMessage from 'components/Shared/ErrorMessage';
import Modal from 'components/Shared/Modal';
import Button from 'components/Shared/Button';
import Input from 'components/Shared/Input';

// lib
import redirect from 'lib/redirect';
import callApi from 'lib/callApi';

// store
import { modalReducer, passwordResetReducer } from 'store/reducer';

// SVG
import Google from '../../static/svgs/Google.svg';
import Logo from '../../static/svgs/Logo.svg';
import CheckMark from '../../static/svgs/CheckMark.svg';
import Error from '../../static/svgs/Error.svg';

type LoginFormValues = {
  email: string;
  password: string;
};

type ResetPasswordFormValues = Pick<LoginFormValues, 'email'>;

type FormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

const loginValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length')
    .max(30, 'Must be less than 30 length'),
});

const resetPasswordValidationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
});

const Login: FunctionComponent<{}> = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [ visible, modalDispatch ] = useReducer(modalReducer, false);
  const [
    passwordResetState,
    passwordResetDispatch,
  ] = useReducer(passwordResetReducer, { emailSent: '' });

  const _handleLogin = async ({ email, password }: LoginFormValues, { setSubmitting, resetForm }: FormMethod) => {
    setErrorMessage('');

    const response = await callApi({
      url: '/api/v1/login',
      data: { email, password },
      method: 'post',
    });

    if (response.success) {
      redirect({}, '/dashboard');
    }

    if (response.status === 401) {
      setErrorMessage(response.message);
    }

    if (response.status === 403) {
      sweetalert({
        content: <SweetAlertContent />,
        button: false,
      });
    }

    resetForm();
    return setSubmitting(false);
  };

  const _handlePasswordReset = async ({ email }: ResetPasswordFormValues, { setSubmitting, resetForm }: FormMethod) => {
    const response = await callApi({
      url: '/api/v1/forgot-password',
      data: { email },
      method: 'post',
    });

    if (response.success) {
      resetForm();
      passwordResetDispatch({ type: 'success' });
    }

    if (!response.success) {
      resetForm();
      passwordResetDispatch({ type: 'failed' });
    }

    setSubmitting(false);
  };

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: _handleLogin,
    validationSchema: loginValidationSchema,
  });

  const resetPasswordFormik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: _handlePasswordReset,
    validationSchema: resetPasswordValidationSchema,
  });

  const _socialLogin = () => {
    window.location.href = `${process.env.API_URL}/api/v1/google`;
  };

  const _toggleModal = () => {
    modalDispatch({ type: 'toggle' });
    passwordResetDispatch({ type: 'reset' });
  };

  const _showPasswordResetForm = () => {
    passwordResetDispatch({ type: 'reset' });
  };

  const {
    values: loginValues,
    errors: loginErrors,
    isSubmitting: loginIsSubmitting,
    handleSubmit: handleLoginSubmit,
    handleChange: handleLoginInputChange,
  } = loginFormik;

  const {
    values: passwordResetValues,
    errors: passwordResetErrors,
    isSubmitting: passwordResetIsSubmitting,
    handleSubmit: handleSubmitPasswordReset,
    handleChange: handlePasswordResetInputChange,
  } = resetPasswordFormik;

  const renderPasswordResetForm = (
    <div className="pv4 ph2 w-100">
      <h2>Reset Password</h2>
      <p className="f6">
        Enter the email associated with your account and we'll send an email with instructions to reset your password.
      </p>
      <form onSubmit={handleSubmitPasswordReset} className="w-100">
        <div className="flex flex-column justify-center item-center w-100">
          <Input
            className="pv3 pr2 f6 input-reset bg-transparent w-100 mb1"
            defaultType="email"
            placeholder="Enter E-mail"
            name="email"
            value={passwordResetValues.email}
            leftIconName="Email"
            onChange={handlePasswordResetInputChange}
            error={passwordResetErrors.email}
          />
          <p onClick={_toggleModal} className="mv3 mh1 lh-copy f6 pointer blue">
            Wait, I remember my password
          </p>
        </div>
        <Button
          disabled={!!(passwordResetErrors.email) || passwordResetIsSubmitting}
          className="c-ResetPassword pv3 ph2 ba b--black-50 bg-black-50 white pointer f6 w-100"
          type="submit"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );

  const renderPasswordResetSent = (
    <div className="pa4 w-100 flex flex-column justify-center items-start">
      <CheckMark className="w3 h3 fill-green"/>
      <div className="w-100">
        <h2>Check your inbox</h2>
        <p className="f6">
          To reset your password click the link in the confirmation email we've just sent you.
        </p>
        <p className="f6 mt4">
          Haven't received the email yet? {' '}
          <a onClick={_showPasswordResetForm} className="blue link pointer">Resend Email</a>
        </p>
      </div>
    </div>
  );

  const renderPasswordResetFailed = (
    <div className="pa4 w-100 flex flex-column justify-center items-start">
      <Error className="w3 h3"/>
      <div className="w-100">
        <h2>Password reset failed</h2>
        <p className="f6 lh-copy">
          Email not registered to CoQonect or an unknown error occurred. If you're certain the email you entered is {'  '}
          registered? <a onClick={_showPasswordResetForm} className="blue link pointer">Resend Email</a>
        </p>
      </div>
    </div>
  );

  return (
    <div className="c-Login w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <Modal visible={visible} onClose={_toggleModal}>
        {passwordResetState.emailSent === 'sent' && renderPasswordResetSent}
        {passwordResetState.emailSent === 'failed' && renderPasswordResetFailed}
        {!passwordResetState.emailSent && renderPasswordResetForm}
      </Modal>
      <ErrorMessage message={errorMessage} />
      <div className="shadow-1-m shadow-1-l w-100 w-50-m w-40-l mt1">
        <div className="tc pv2">
          <Link href="/">
            <a>
              <Logo className="w3 h3 c-Logo"/>
            </a>
            </Link>
        </div>
        <div className="mh4 mb4 mt2">
          <div className="ba b--black-10 br2 pa2">
            <Button
              className="pa3 input-reset ba b--black-20 bg-transparent pointer f6 w-100 flex items-center"
              onClick={_socialLogin}
              type="button"
            >
              <Google className="w1 h1 mr4" />
              <span className="f6">Sign In with Google</span>
            </Button>
            <h4 className="lh-title tc">OR</h4>
            <form onSubmit={handleLoginSubmit}>
              <div
                id="login"
                className="ba b--transparent ph0 pb1 mh0"
              >
                <Input
                  className="pv3 pr2 f6 input-reset bg-white w-100 mb1"
                  defaultType="email"
                  placeholder="Enter E-mail"
                  name="email"
                  value={loginValues.email}
                  leftIconName="Email"
                  onChange={handleLoginInputChange}
                  error={loginErrors.email}
                />
                <Input
                  className="pv3 f6 input-reset bg-white w-100 mb1"
                  containerClassName="mv3"
                  defaultType="password"
                  customType="text"
                  placeholder="Enter Password"
                  name="password"
                  value={loginValues.password}
                  leftIconName="Lock"
                  defaultRightIconName="Hide"
                  customRightIconName="Show"
                  onChange={handleLoginInputChange}
                  error={loginErrors.password}
                />
                <a onClick={_toggleModal} className="link lh-copy f6 pointer blue">Forgot Password?</a>
              </div>
              <Button
                className="bn white pointer f6 w-100"
                disabled={!!(loginErrors.password) || !!(loginErrors.email) || loginIsSubmitting}
                filled={true}
                type="submit"
                withFixedHeight={true}
              >
                {loginIsSubmitting ? <SVG src="/static/svgs/Loading.svg" className="w2 h2 c-LoadingWhite" /> : 'Login'}
              </Button>
            </form>
          </div>
          <div className="flex justify-between items-center mv3 link f6">
            <span aria-labelledby="Don't have an account?">Don't have an account?</span>
            <Link href="/signup">
              <a className="blue link">Sign Up</a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
