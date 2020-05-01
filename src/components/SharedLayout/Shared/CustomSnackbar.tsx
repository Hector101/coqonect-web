import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

import { useStore } from 'src/store';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  default: {
    backgroundColor: 'transparent',
  },
  icon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  default: CloseIcon,
};

const CustomSnackbar: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const variant = uiStore.snackBarVariant;

  const closeSnackbar = () => {
    uiStore.closeSnackBar();
  };

  const Icon = variantIcon[variant];


  const defaultMessage = () => {
    switch (variant) {
      case 'error':
        return 'Whoops, something went wrong';
      case 'success':
        return 'Operation successful!';
      default:
        return 'Whoops, something went wrong';
    }
  };

  const snackBarContentClassName = classnames(classes.margin, classes[variant]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      onClose={closeSnackbar}
      open={uiStore.snackBarOpen}
      message={uiStore.snackBarMessage}
    >
      <SnackbarContent
        className={snackBarContentClassName}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classnames(classes.icon, classes.iconVariant)} />
            {uiStore.snackBarMessage || defaultMessage()}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" onClick={closeSnackbar}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default observer(CustomSnackbar);
