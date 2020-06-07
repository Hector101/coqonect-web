import React, { FunctionComponent, ReactNode } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react-lite';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useStore } from 'src/store';

import { isFunction } from 'src/lib';

type Props = {
  children: ReactNode;
  dialogId: string;
  title: string;
  actionText?: string;
  handleAction?: () => void;
  disableActionButton?: boolean;
  actionProcessText?: string;
  actionProgressStatus?: boolean;
  darkenHeaderBackground?: boolean;
};

type DialogTitleProps = {
  onClose: () => void;
  id: string;
  darkenHeaderBackground: boolean;
};

const useDialogTitleStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.palette.grey[600],
  },
  darkenBackground: {
    backgroundColor: theme.palette.grey[300],
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[600],
  },
}));

const DialogTitle: FunctionComponent<DialogTitleProps> = (props) => {
  const classes = useDialogTitleStyle();
  const { children, onClose } = props;

  const customClassName = classnames(classes.root, {
    [classes.darkenBackground]: !!(props.darkenHeaderBackground),
  });

  return (
    <MuiDialogTitle
      disableTypography={true}
      className={customClassName}
    >
      <Typography
        variant="h6"
        className={classes.title}
      >
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    lineHeight: 1.5,
    minWidth: 600,

    [theme.breakpoints.down(960)]: {
      minWidth: 500,
    },

    [theme.breakpoints.down(768)]: {
      minWidth: 400,
    },

    [theme.breakpoints.down(480)]: {
      minWidth: 300,
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomModal: FunctionComponent<Props> = ({
  children,
  dialogId,
  title,
  actionText,
  handleAction,
  disableActionButton,
  actionProgressStatus,
  actionProcessText,
  darkenHeaderBackground,
}) => {
  const { uiStore } = useStore();

  const handleClose = () => {
    uiStore.closeDialog();
  };

  const handleClick = () => {
    handleAction();
  };

  return useObserver(() => (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={uiStore.dialog.open && dialogId === uiStore.dialog.id}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} darkenHeaderBackground={darkenHeaderBackground}>
          {title}
        </DialogTitle>
        <DialogContent dividers={true}>
            {children}
        </DialogContent>
        {
          isFunction(handleAction)
            ? (
              <DialogActions>
                <Button
                  onClick={handleClick}
                  color="primary"
                  variant="contained"
                  size="small"
                  disabled={disableActionButton}
                >
                  {
                    actionProgressStatus
                      ? actionProcessText
                      : actionText
                  }
                </Button>
              </DialogActions>
            ) : null
        }
      </Dialog>
    </div>
  ));
};

export default CustomModal;
