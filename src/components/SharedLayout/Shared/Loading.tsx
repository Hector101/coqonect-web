import React from 'react';
import SVG from 'react-inlinesvg';

const LoadingPage = () => {
  return (
    <div className="w-100 h-100 flex justify-center items-center">
        <SVG src="/svgs/HorizontalLoading.svg" className="w3 h3" />
    </div>
  );
};

export default LoadingPage;
