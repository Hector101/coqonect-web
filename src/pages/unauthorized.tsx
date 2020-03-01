import React from 'react';
import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

const Unauthorized = dynamic(() => import('src/components/Unauthorized'), {
  loading: () =>  <LoadingPage />,
});


import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const UnauthorizedPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Unauthorized | CoQonect">
      <Unauthorized />
    </Plain>
  );
};

export default UnauthorizedPage;
