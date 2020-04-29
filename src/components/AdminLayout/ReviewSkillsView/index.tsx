import React, { FunctionComponent, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react-lite';

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import ViewSkillsTable from 'src/components/Admin/ViewSkillsTable';

import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

import { TQuery } from 'src/apolloTypes';

import { AUTHENTICATED_USER } from 'src/queries';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      'borderRadius': 4,
      'position': 'relative',
      'backgroundColor': theme.palette.background.paper,
      'border': '1px solid #ced4da',
      'fontSize': 16,
      'padding': '10px 26px 10px 12px',
      'transition': theme.transitions.create(['border-color', 'box-shadow']),
      'fontFamily': [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);


const ReviewSkillsView: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [filterStatus, setFilterStatus] = useState('pending');

  const{ data: userData, loading: userLoading } = useQuery<TQuery>(AUTHENTICATED_USER,
    { variables: { status: filterStatus, take: 20, skip: 0 },
  });


  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setFilterStatus(event.target.value);
  };

  if (userLoading || !userData) {
    return <LoadingPage />;
  }

  const { userSkills } = userData.admin;
  return (
    <div>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="filter"
          value={filterStatus}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
        </NativeSelect>
      </FormControl>
      <ViewSkillsTable  userSkills={userSkills} />
    </div>
  );
};

export default observer(ReviewSkillsView);
