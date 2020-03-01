import React from 'react';
import SVG from 'react-inlinesvg';

const LoadingPage = () => (
  <div className="w-100 vh-100 flex justify-center items-center">
   <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>
);

export default LoadingPage;
