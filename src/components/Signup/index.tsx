import React, { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import SVG from 'react-inlinesvg';

// components
import ErrorMessage from 'src/components/Shared/ErrorMessage';
import SuccessMessage from 'src/components/Shared/SuccessMessage';
import Button from 'src/components/Shared/Button';
import Input from 'src/components/Shared/Input';

// lib
import callApi from 'src/lib/callApi';

// SVG
import Google from '../../../public/svgs/Google.svg';
import Logo from '../../../public/svgs/Logo.svg';


type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

type FormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
};

const validationSchema = yup.object().shape({
  fullName: yup.string()
    .required('Required'),
  email: yup.string()
    .email('Enter a valid E-mail')
    .required('Required'),
  password: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length')
    .max(30, 'Must be less than 30 length'),
});

const Signup: FunctionComponent<{}> = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const _handleSignup = async ({ fullName, email, password }: FormValues, { setSubmitting, resetForm }: FormMethod) => {
    setErrorMessage('');
    setSuccessMessage('');

    const response = await callApi({
      url: '/api/v1/signup',
      data: { fullName, email, password },
      method: 'post',
    });

    if (response.success) {
      resetForm();
      setSuccessMessage(response.message);
    } else {
      setErrorMessage(response.message);
    }

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

  const _socialSignup = () => {
    window.location.href = `${process.env.API_URL}/api/v1/google`;
  };

  const { handleSubmit, handleChange, values, errors, isSubmitting } = formik;

  return (
    <div className="c-Signup w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <ErrorMessage message={errorMessage} />
      <SuccessMessage message={successMessage} />
      <div className="shadow-1-m shadow-1-l w-100 w-50-m w-40-l mt1">
        <div className="tc pv2">
          <Link href="/">
            <a className="pointer">
              <Logo className="w3 h3 c-Logo"/>
            </a>
          </Link>
        </div>
        <div className="mh4 mb4 mt2">
          <div className="ba b--black-10 br2 pa2">
            <Button
              className="pa3 input-reset ba b--black-20 bg-transparent pointer f6 w-100 flex items-center"
              onClick={_socialSignup}
              type="button"
            >
              <Google className="w1 h1 mr4" />
              <span className="f6">Sign up with Google</span>
            </Button>
            <h4 className="lh-title tc">OR</h4>
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
                  error={errors.password}
                />
              </div>
              <Button
                type="submit"
                className="pa3 white pointer f6 w-100 bn"
                disabled={!!(errors.password) || !!(errors.email) || isSubmitting}
                filled={true}
              >
                {isSubmitting ? <SVG src="/svgs/Loading.svg" className="w2 h2 c-LoadingWhite" /> : 'Signup'}
              </Button>
            </form>
          </div>
          <div className="flex justify-between items-center mv3 link f6">
            <span>Already have an account?</span>
            <Link href="/login">
              <a className="blue link pointer">Login</a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
