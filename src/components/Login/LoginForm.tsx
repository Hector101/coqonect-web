import React, { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import sweetalert from '@sweetalert/with-react';
import SVG from 'react-inlinesvg';
import { observer } from 'mobx-react-lite';

// Components
import SweetAlertContent from 'src/components/Shared/SweetAlertContent';
import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

import CustomSwitch from 'src/components/Shared/CustomSwitch';

import { useStore } from 'src/store';

import { TLoginFormValues, TFormMethod } from 'src/interfaces/Forms';

type Props = {
  toggleSwitch: () => void;
  isAdminLogin: boolean;
};

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length'),
});

const LoginForm: FunctionComponent<Props> = ({ toggleSwitch, isAdminLogin }) => {

  const router = useRouter();
  const { uiStore, userStore } = useStore();

  useEffect(() => {
    if (userStore.emailUnverified) {
      sweetalert({
        content: <SweetAlertContent />,
        button: false,
      });

      userStore.resetEmailUnverified();
    }
  });

  const _handleLogin = async ({ email, password }: TLoginFormValues, { setSubmitting, resetForm }: TFormMethod) => {
    userStore.resetLoginResponse();
    if (!isAdminLogin) {
      await userStore.handleLogin({ email, password },
        () => {
          uiStore.setSnackBarSuccessMessage(userStore.loginResponse.message);
          router.push('/dashboard');
        },
        () => {
          uiStore.setSnackBarErrorMessage(userStore.loginResponse.message);
        },
      );
    } else {
      await userStore.handleAdminLogin({ email, password },
        () => {
          uiStore.setSnackBarSuccessMessage(userStore.loginResponse.message);
          router.push('/admin');
        },
        () => {
          uiStore.setSnackBarErrorMessage(userStore.loginResponse.message);
        },
      );
    }

    resetForm();
    return setSubmitting(false);
  };

  const _toggleModal = () => {
    uiStore.toggleModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: _handleLogin,
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
    <form onSubmit={handleSubmit}>
      <div
        id="login"
        className="ba b--transparent ph0 pb1 mh0"
      >
        <Input
          className="pv3 pr2 f6 input-reset bg-white w-100 mb1"
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
          className="pv3 f6 input-reset bg-white w-100 mb1"
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
        <div className="flex items-center justify-between">
          <a onClick={_toggleModal} className="link lh-copy f6 pointer blue">Forgot Password?</a>
          <CustomSwitch
            toggleSwitch={toggleSwitch}
            isAdminLogin={isAdminLogin}
            label="Admin"
            labelPlacement="start"
            size="medium"
          />
        </div>
      </div>
      <Button
        className="bn white pointer f6 w-100 br2"
        disabled={
          !!(errors.password) ||
          !!(errors.email) ||
          !values.password ||
          !values.email ||
          isSubmitting
        }
        filled={true}
        type="submit"
        withFixedHeight={true}
      >
        {isSubmitting ? <SVG src="/svgs/Loading.svg" className="w2 h2 c-LoadingWhite" /> : 'Login'}
      </Button>
    </form>
  );
};

export default observer(LoginForm);
