import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import sweetalert from '@sweetalert/with-react';
import SVG from 'react-inlinesvg';
import { useObserver } from 'mobx-react-lite';

// Components
import SweetAlertContent from 'src/components/SharedLayout/Shared/SweetAlertContent';
import Button from 'src/components/SharedLayout/Shared/Button';
import Input from 'src/components/SharedLayout/Shared/Input';

import { useStore } from 'src/store';

import { TLoginFormValues, TFormMethod } from 'src/interfaces/Forms';

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length'),
});

const LoginForm: FunctionComponent<{}> = () => {
  const [ isAdminLogin, setIsAdminLogin ] = useState(false);


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
  }, []);

  const _handleLogin = async ({ email, password }: TLoginFormValues, { setSubmitting, resetForm }: TFormMethod) => {
    userStore.resetLoginResponse();
    if (!isAdminLogin) {
      await userStore.handleLogin({ email, password },
        () => {
          uiStore.setSnackBarSuccessMessage(userStore.loginResponse.message);
          router.push('/app/dashboard');
        },
        () => {
          uiStore.setSnackBarErrorMessage(userStore.loginResponse.message);
        },
      );
    } else {
      await userStore.handleAdminLogin({ email, password },
        () => {
          uiStore.setSnackBarSuccessMessage(userStore.loginResponse.message);
          router.push('/admin/review-skills');
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

  const _onEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.target.value.includes('@coqonect.com')) {
        setIsAdminLogin(true);
      } else {
        setIsAdminLogin(false);
      }
      handleChange(event);
  };

  return useObserver(() => (
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
          onChange={_onEmailChange}
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
  ));
};

export default LoginForm;
