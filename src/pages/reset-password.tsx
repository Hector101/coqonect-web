import React from 'react';
import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

import Plain from 'src/components/Containers/Plain';

const ResetPassword = dynamic(() => import('src/components/ResetPassword'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w4 h4 c-LoadingPrimary" />
  </div>,
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
