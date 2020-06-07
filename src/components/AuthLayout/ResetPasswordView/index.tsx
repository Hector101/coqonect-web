import React, { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useObserver } from 'mobx-react-lite';
import * as yup from 'yup';
import Link from 'next/link';

// lib
import callApi from 'src/lib/callApi';
import redirect from 'src/lib/redirect';

import { useStore } from 'src/store';

// SVG
import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Lock,
  Logo,
} = SVGS;

type FormValues = {
  password: string;
  confirmPassword: string;
};

type FormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

const validationSchema = yup.object().shape({
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length')
    .max(30, 'Must be less than 30 length'),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required'),
});


const ResetPasswordView: FunctionComponent<{}> = () => {
  const { userStore, uiStore } = useStore();

  const router = useRouter();
  const token = router.query.t as string;

  useEffect(() => {
    const fetchData = async () => {
      const response = await callApi({
        url: '/api/v1/verify-reset-password-token',
        data: { token },
        method: 'post',
      });

      if (!response.success) {
        redirect({}, '/auth/unauthorized');
      }
    };
    fetchData();

  }, []);

  const _handlePasswordReset = async (
    { password }: FormValues,
    { setSubmitting, resetForm }: FormMethod,
  ) => {
    userStore.handlePasswordReset({ password, token },
        () => {
          uiStore.setSnackBarSuccessMessage(userStore.passwordResetResponse.message);
        },
        () => {
          uiStore.setSnackBarErrorMessage(userStore.passwordResetResponse.message);
        },
      );

    resetForm();
    return setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: _handlePasswordReset,
    validationSchema,

  });

  const { handleSubmit, handleChange, values, errors, isSubmitting } = formik;
  const disabled = !!(errors.password) || !!(errors.confirmPassword) || isSubmitting;

  return useObserver(() => (
    <div className="c-ResetPassword w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <div className="shadow-1-m shadow-1-l w-100 w-50-m w-40-l mt1">
        <div className="tc pv2">
          <Link href="/">
            <a>
              <Logo className="w3 h3 fill-primary-blue"/>
            </a>
          </Link>
        </div>
        <div className="mh4 mb4 mt2">
          <div className="ba b--black-10 br2 pa2">
            <h4 className="tc">Enter new password</h4>
            <form onSubmit={handleSubmit}>
              <div
                id="signup"
                className="ba b--transparent ph0 pb1 mh0"
              >
                <div className="relative mv3">
                  <Lock className="w1 h1 absolute left-1 top-1" />
                  <input
                    className="pv3 pl5 pr2 input-reset ba b--black-20 bg-transparent w-100 mb1"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && <label className="light-red f6">{errors.password}</label>}
                </div>
                <div className="mv3 relative">
                  <Lock className="w1 h1 absolute left-1 top-1" />
                  <input
                    className="pv3 pl5 pr2 input-reset ba b--black-20 bg-transparent w-100 mb1"
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && <label className="light-red f6">{errors.confirmPassword}</label>}
                </div>
              </div>
              <button
                type="submit"
                className={`pa3 white f6 w-100 ${disabled ? 'bg-black-50' : 'bg-black-70 pointer'}`}
                disabled={disabled}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ResetPasswordView;
