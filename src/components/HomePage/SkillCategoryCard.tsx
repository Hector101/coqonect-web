import React, { FunctionComponent } from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';

import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SkillCategoryCard: FunctionComponent<{}> = () => {
  return (
    <Paper variant="outlined" elevation={1} className="c-SkillCategoryCard">
      <div className="tc flex justify-center items-center bg-black-10">
        <CodeIcon aria-label="Programming Icon" />
        <h3 className="b f5 ml2">Programming</h3>
      </div>
      <Divider />
      <ul className="list pa0 ma0">
        <li className="pv3 tc">JavaScript</li>
        <Divider />
        <li className="pv3 tc">Python</li>
        <Divider />
        <li className="pv3 tc">Data Science</li>
        <Divider />
        <li className="pv3 tc">Web Programming</li>
        <Divider />
      </ul>
      <div className="pv3 flex justify-center items-center blue">
        <ExpandMoreIcon />
        More...
      </div>
    </Paper>
  );
};

export default SkillCategoryCard;
