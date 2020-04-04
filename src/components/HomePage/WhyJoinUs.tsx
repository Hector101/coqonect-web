import React, { FunctionComponent } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const WhyJoinUs: FunctionComponent<{}> = () => {
  return (
    <section className="c-WhyJoinUs pa4">
      <div className="flex flex-column-reverse flex-row-ns items-center justify-between">
        <div className="w-100 w-50-ns">
          <img src="images/blurred.png" className="c-image" />
        </div>
        <div className="w-100 w-50-ns">
          <div className="ph3">
            <Typography variant="h6">Why You Should</Typography>
            <Typography variant="h3">Join Us</Typography>
          </div>
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Multiple skill categories" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Verified Experts" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Affordable Pricing" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Review System" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Free Mentorship Sessions" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
