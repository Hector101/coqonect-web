import React from 'react';
import dynamic from 'next/dynamic';

import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

const ResetPasswordView = dynamic(() => import('src/components/AuthLayout/ResetPasswordView'), {
  loading: () =>  <LoadingPage />,
});

import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ResetPasswordPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Reset Password | CoQonect">
      <ResetPasswordView />
    </Plain>
  );
};

export default ResetPasswordPage;
