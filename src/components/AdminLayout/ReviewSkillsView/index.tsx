import React, { FunctionComponent, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import ViewSkillsTable from 'src/components/AdminLayout/ReviewSkillsView/ViewSkillsTable';

import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';
import GridCard from 'src/components/SharedLayout/Shared/GridCard';

import { TQuery } from 'src/apolloTypes';
import { AUTHENTICATED_ADMIN } from 'src/queries';

import { statusFilterOptions, userFilterOptions } from 'src/constants/selectOptions';

import { useInputFieldStyles } from 'src/styles/materiaStyles';

const ReviewSkillsView: FunctionComponent<{}> = () => {
  const [statusFilterOption, setStatusFilterOption] = useState({ value: '', label: '' });
  const [userFilterOption, setUserFilterOption] = useState({ value: '', label: '' });
  const [searchValue, setSearchValue] = useState('');

  const classes = useInputFieldStyles();

  const [
    getUserSkills,
    { data, loading },
  ] = useLazyQuery<TQuery>(AUTHENTICATED_ADMIN);

  if (loading) {
    return <LoadingPage />;
  }

  const _changeByStatus = (option: any) => {
    setStatusFilterOption(option);
  };

  const _changeByUser = (option: any) => {
    setUserFilterOption(option);
  };

  const _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const _handleFilter = () => {
    getUserSkills({
      variables: {
        status: statusFilterOption.value,
        email: userFilterOption.value === 'email' ? searchValue : '',
        name: userFilterOption.value === 'name' ? searchValue : '',
        take: 20,
        skip: 0,
      },
    },
  );
  };

  return (
    <Grid container spacing={2}>
      <GridCard
        headerTitle="Filters"
        subHeaderTitle="Search user skills by status or user details"
        xs={12}
        md={5}
        lg={3}
      >
        <div className="w-100 mb3">
          <Typography variant="subtitle2">By status</Typography>
          <Select
            value={statusFilterOption}
            onChange={_changeByStatus}
            options={statusFilterOptions}
            className="w-100"
          />
        </div>
        <div className="w-100 mb3">
          <Typography variant="subtitle2">By Email or Name</Typography>
          <Select
            value={userFilterOption}
            onChange={_changeByUser}
            options={userFilterOptions}
            className="w-100"
          />
        </div>
        <Divider light />
        <div className="w-100 mt3">
          <TextField
            className={classes.root}
            variant="outlined"
            label="Email or Name"
            defaultValue={searchValue}
            type={userFilterOption.value === 'email' ? 'email' : 'text'}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={_handleInputChange}
          />
        </div>
        <div className="w-100 mt3">
          <Button
            className={classnames('w-100 bg-blue', classes.button)}
            color="primary"
            variant="contained"
            onClick={_handleFilter}
            disabled={!statusFilterOption.value}
          >
            Query User Skills
          </Button>
        </div>
      </GridCard>
      <GridCard xs={12} md={7} lg={9}>
        {
          data
            ? <ViewSkillsTable  userSkills={data.admin.userSkills} />
            : <Typography component="div">No user skill available</Typography>
        }
      </GridCard>
    </Grid>
  );
};

export default observer(ReviewSkillsView);
