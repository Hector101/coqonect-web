import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

// components
import ErrorMessage from 'components/Shared/ErrorMessage';
import SuccessMessage from 'components/Shared/SuccessMessage';

// lib
import callApi from 'lib/callApi';
import redirect from 'lib/redirect';

// SVG
import Lock from '../../static/svgs/Lock.svg';
import Logo from '../../static/svgs/Logo.svg';

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


const ResetPassword: FunctionComponent<{}> = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();
  const { t: token } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const response = await callApi({
        url: '/api/v1/verify-reset-password-token',
        data: { token },
        method: 'post',
      });

      if (!response.success) {
        redirect({}, '/unauthorized');
      }
    };
    fetchData();

  }, []);

  const _handlePasswordReset = async (
    { password }: FormValues,
    { setSubmitting, resetForm }: FormMethod,
  ) => {
    setErrorMessage('');
    setSuccessMessage('');

    const response = await callApi({
      url: '/api/v1/reset-password',
      data: { password, token },
      method: 'post',
    });

    if (response.success) {
      resetForm();
      setSuccessMessage(response.message);
      redirect({}, '/login');
    } else {
      setErrorMessage(response.message);
    }

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

  return (
    <div className="c-ResetPassword w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <ErrorMessage message={errorMessage} />
      <SuccessMessage message={successMessage} />
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
  );
};

export default ResetPassword;
