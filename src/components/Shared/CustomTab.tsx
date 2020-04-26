import React, { FunctionComponent, ReactNode } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

type Props = {
  children: any;
};

type TabPanelProps = {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
};

const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </Typography>
  );
};

function a11yProps(index: number) {
  return {
    'id': `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const CustomTab: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery(theme.breakpoints.down(768));

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={0} square={true} variant="outlined">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={matches ? 'scrollable' : 'standard'}
          centered={true}
          aria-label="tab panel"
        >
          {
            React.Children.map(children, (child, index) => {
              return (
                <Tab key={index} style={{ fontWeight: 'bold' }} label={child.props.title} {...a11yProps(0)} />
              );
            })
          }
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {
            React.Children.map(children, (child, index) => {
              return (
                <TabPanel key={index} value={value} index={index} dir={theme.direction}>
                  {child}
                </TabPanel>
              );
            })
          }
      </SwipeableViews>
    </div>
  );
};

export default CustomTab;
