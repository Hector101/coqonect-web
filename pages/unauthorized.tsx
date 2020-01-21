import React from 'react';
import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// Components
import Plain from 'components/Containers/Plain';

const Unauthorized = dynamic(() => import('components/Unauthorized'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/static/svgs/Loading.svg" className="w4 h4 c-LoadingPrimary" />
  </div>,
});


import INextFunctionalComponent from 'interfaces/NextFunctionalComponent';

const UnauthorizedPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Unauthorized | CoQonect">
      <Unauthorized />
    </Plain>
  );
};

export default UnauthorizedPage;
