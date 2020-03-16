import React, { FunctionComponent, ReactNode } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { useStore } from 'src/store';

type Props = {
  children: ReactNode;
  dialogId: string;
  title: string;
  actionText: string;
  handleAction?: () => void;
  disableActionButton?: boolean;
  actionProcessText: string;
  actionProgressStatus: boolean;
};

type DialogTitleProps = {
  onClose: () => void;
  id: string;
};

const useDialogTitleStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogTitle: FunctionComponent<DialogTitleProps> = (props) => {
  const classes = useDialogTitleStyle();
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography={true} className={classes.root} {...other}>
      <Typography
        variant="h6"
        style={{ fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase' }}
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
    padding: theme.spacing(2),
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
}) => {
  const { uiStore } = useStore();

  const handleClose = () => {
    uiStore.closeDialog();
  };

  const handleClick = () => {
    if (handleAction) {
      handleAction();
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={uiStore.dialog.open && dialogId === uiStore.dialog.id}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers={true}>
            {children}
        </DialogContent>
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
      </Dialog>
    </div>
  );
};

export default observer(CustomModal);
