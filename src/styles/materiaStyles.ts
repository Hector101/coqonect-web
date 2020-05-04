import { makeStyles, Theme } from '@material-ui/core/styles';

export const usePaperStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: 'calc(100vh - 92px)',
  },
}));

export const useTableStyles = makeStyles({
  root: {
    width: '100%',
    border: 'ipx solid red',
  },
  container: {
    maxHeight: '100%',
  },
  verifiedIconColor: {
    color: '#16B8C2',
  },
  pendingReviewIcon: {
    color: '#fa8a49',
  },
  unverifiedIcon: {
    color: '#f50057',
  },
  tableRow: {
    cursor: 'pointer',
  },
});

export const useInputFieldStyles = makeStyles({
  root: {
    'width': '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#cccccc',
      },
      '&:hover fieldset': {
        borderColor: '#cccccc',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2684FF',
      },
    },
  },
});
