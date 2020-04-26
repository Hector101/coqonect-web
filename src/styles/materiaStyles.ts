import { makeStyles, Theme } from '@material-ui/core/styles';

export const usePaperStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(0, 2),
  },
}));

export const useIconStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
  verifiedIconColor: {
    color: '#16B8C2',
  },
  pendingReviewIcon: {
    color: '#ec1111',
  },
  tableRow: {
    cursor: 'pointer',
  },
});
