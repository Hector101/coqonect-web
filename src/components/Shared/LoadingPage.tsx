import React from 'react';
import SVG from 'react-inlinesvg';
import Paper from '@material-ui/core/Paper';

import { usePaperStyles } from 'src/styles/materiaStyles';

const LoadingPage = () => {
  const classes = usePaperStyles();

  return (
  <Paper elevation={0} className={classes.paper}>
    <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
    </div>
  </Paper>
)};

export default LoadingPage;
