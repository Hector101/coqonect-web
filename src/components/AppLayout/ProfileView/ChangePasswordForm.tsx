import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Input from 'src/components/SharedLayout/Shared/Input';
import Button from 'src/components/SharedLayout/Shared/Button';

import { CHANGE_PASSWORD } from 'src/queries';

import { TMutation } from 'src/apolloTypes';

import { useStore } from 'src/store';

import { getGraphQLMessage } from 'src/lib';

type ChangePasswordValues = {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

const validationSchema = yup.object().shape({
  oldPassword: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length'),
  newPassword: yup.string()
    .required('Required')
    .min(6, 'Must be more than 6 length'),
  confirmNewPassword: yup.string()
    .required('Required')
    .oneOf([yup.ref('newPassword'), null], 'Passwords don\'t match!')
    .min(6, 'Must be more than 6 length'),
});

const ChangePasswordForm: FunctionComponent<{}> = () => {
  const { uiStore, userStore } = useStore();
  const router = useRouter();

  const [changePassword, { loading }] = useMutation<TMutation>(CHANGE_PASSWORD,
    {
      onCompleted(data) {
        uiStore.setSnackBarSuccessMessage(data.client.changePassword.message);

        setTimeout(() => {
          userStore.handleLogout(
            () => {
              uiStore.setSnackBarMessage('Logging out...', 'info');
              setTimeout(() => {
                router.push('/auth/login');
                uiStore.setSnackBarMessage('Logged out, Sign in again', 'info');
              }, 3000);
            },
          );
        }, 3000);
      },
      onError(error) {
        uiStore.setSnackBarErrorMessage(getGraphQLMessage(error.message));
      },
  });

  const _handleChangePassword = async (values: ChangePasswordValues) => {
    changePassword({
      variables: { oldPassword: values.oldPassword, newPassword: values.newPassword },
    });
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit: _handleChangePassword,
    validationSchema,
  });

  const {
    values: { oldPassword, newPassword, confirmNewPassword },
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className="c-EditProfileForm pa2 ba b--black-10">
      <div className="w-100 w-50-l center">
        <div className="w-100 mv2">
          <label htmlFor="email" className="f5 b black-50">
            Old Password
          </label>
          <Input
            className="pv3 f6 input-reset bg-white w-100 mb1"
            containerClassName="mv3"
            defaultType="password"
            customType="text"
            placeholder="Enter Old Password"
            name="oldPassword"
            value={oldPassword}
            error={errors.oldPassword}
            leftIconName="Lock"
            defaultRightIconName="Hide"
            customRightIconName="Show"
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"
          />
        </div>
        <div className="w-100 mv2">
          <label htmlFor="fullName" className="f5 b black-50">New Password</label>
          <Input
            className="pv3 f6 input-reset bg-white w-100 mb1"
            containerClassName="mv3"
            defaultType="password"
            customType="text"
            placeholder="Enter New Password"
            name="newPassword"
            value={newPassword}
            error={errors.newPassword}
            leftIconName="Lock"
            defaultRightIconName="Hide"
            customRightIconName="Show"
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"
          />
        </div>
        <div className="w-100 mv2">
          <label htmlFor="fullName" className="f5 b black-50">Confirm New Password</label>
          <Input
            className="pv3 f6 input-reset bg-white w-100 mb1"
            containerClassName="mv3"
            defaultType="password"
            customType="text"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            value={confirmNewPassword}
            error={errors.confirmNewPassword}
            leftIconName="Lock"
            defaultRightIconName="Hide"
            customRightIconName="Show"
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"
          />
        </div>
        <Button
          className="c-save-button bn br1 bg-primary-blue  white f6 pv3 ph4 w-100 mt2 ttu"
          type="submit"
          disabled={
            !!(errors.newPassword) ||
            !!(errors.newPassword) ||
            !!(errors.confirmNewPassword) ||
            loading
          }
        >
          {loading ? 'Processing...' : 'Update Password'}
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
