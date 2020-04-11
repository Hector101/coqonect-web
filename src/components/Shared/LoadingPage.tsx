import React from 'react';
import SVG from 'react-inlinesvg';
import Paper from '@material-ui/core/Paper';

const LoadingPage = () => (
  <Paper elevation={0}>
    <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
    </div>
  </Paper>
);

export default LoadingPage;
