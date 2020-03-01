import React from 'react';
import dynamic from 'next/dynamic';

import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

const ResetPassword = dynamic(() => import('src/components/ResetPassword'), {
  loading: () =>  <LoadingPage />,
});

import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ResetPasswordPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Reset Password | CoQonect">
      <ResetPassword />
    </Plain>
  );
};

export default ResetPasswordPage;
