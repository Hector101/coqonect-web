import React from 'react';
import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

const UnauthorizedView = dynamic(() => import('src/components/AuthLayout/UnauthorizedView'), {
  loading: () =>  <LoadingPage />,
});


import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const UnauthorizedPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Unauthorized | CoQonect">
      <UnauthorizedView />
    </Plain>
  );
};

export default UnauthorizedPage;
