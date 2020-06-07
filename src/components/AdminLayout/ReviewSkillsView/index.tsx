import React, { FunctionComponent } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useObserver } from 'mobx-react-lite';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import ViewSkillsList from 'src/components/AdminLayout/ReviewSkillsView/ViewSkillsList';

import Loading from 'src/components/SharedLayout/Shared/Loading';
import GridCard from 'src/components/SharedLayout/Shared/GridCard';

import { TQuery } from 'src/apolloTypes';
import { AUTHENTICATED_ADMIN } from 'src/queries';
import { useStore } from 'src/store';

import { statusFilterOptions, userFilterOptions } from 'src/constants/selectOptions';

import { useInputFieldStyles } from 'src/styles/materiaStyles';

const ReviewSkillsView: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();

  const classes = useInputFieldStyles();

  const [
    getUserSkills,
    { data, loading },
  ] = useLazyQuery<TQuery>(AUTHENTICATED_ADMIN);

  const _changeByStatus = (option: any) => {
    uiStore.setStatusSelectOption(option);
  };

  const _changeByUser = (option: any) => {
    uiStore.setUserSelectOption(option);
  };

  const _handleUserInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (uiStore.userSkillFilter.userSelectOption.value === 'email') {
      uiStore.setEmail(event.target.value);
      uiStore.setName('');
    }
    if (uiStore.userSkillFilter.userSelectOption.value === 'name') {
      uiStore.setName(event.target.value);
      uiStore.setEmail('');
    }
  };

  const _handleSkillNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    uiStore.setSkillName(event.target.value);
  };

  const _handleFilter = () => {
    uiStore.resetSkip(() => {
      getUserSkills({
        variables: {
          status: uiStore.userSkillFilter.statusSelectOption.value,
          email: uiStore.userSkillFilter.email,
          name: uiStore.userSkillFilter.name,
          skillName: uiStore.userSkillFilter.skillName,
          take: uiStore.userSkillFilter.take,
          skip: uiStore.userSkillFilter.skip,
        },
      });
    });
  };

  const _gotoNext = () => {
    uiStore.gotoNext(() => {
      getUserSkills({
        variables: {
          status: uiStore.userSkillFilter.statusSelectOption.value,
          email: uiStore.userSkillFilter.email,
          name: uiStore.userSkillFilter.name,
          skillName: uiStore.userSkillFilter.skillName,
          take: uiStore.userSkillFilter.take,
          skip: uiStore.userSkillFilter.skip,
        },
      });
    });
  };

  const _gotoPrev = () => {
    uiStore.gotoPrev(() => {
      getUserSkills({
        variables: {
          status: uiStore.userSkillFilter.statusSelectOption.value,
          email: uiStore.userSkillFilter.email,
          name: uiStore.userSkillFilter.name,
          skillName: uiStore.userSkillFilter.skillName,
          take: uiStore.userSkillFilter.take,
          skip: uiStore.userSkillFilter.skip,
        },
      });
    });
  };
  return useObserver(() => {

    if (loading) {
      return <Loading />;
    }

    return (
      <Grid container spacing={2}>
        <GridCard
          headerTitle="Filters"
          subHeaderTitle="Query by skill name, status or user details"
          xs={12}
          md={5}
          lg={3}
        >
          <div className="w-100 mb3">
            <Typography variant="subtitle2">By status</Typography>
            <Select
              value={uiStore.userSkillFilter.statusSelectOption}
              onChange={_changeByStatus}
              options={statusFilterOptions}
              className="w-100"
            />
          </div>
          <div className="w-100 mb3">
            <Typography variant="subtitle2">By Email or Name</Typography>
            <Select
              value={uiStore.userSkillFilter.userSelectOption}
              onChange={_changeByUser}
              options={userFilterOptions}
              className="w-100"
            />
          </div>
          <Divider light />
          <div className="w-100 mv3">
            <TextField
              className={classes.root}
              variant="outlined"
              label="Optional: Email or Name"
              defaultValue={uiStore.userSkillFilter.email || uiStore.userSkillFilter.name}
              type={uiStore.userSkillFilter.email === 'email' ? 'email' : 'text'}
              disabled={!uiStore.userSkillFilter.userSelectOption.value}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={_handleUserInfoChange}
            />
          </div>
          <Divider light />
          <div className="w-100 mt3">
            <TextField
              className={classes.root}
              variant="outlined"
              label="Optional: Skill Name"
              defaultValue={uiStore.userSkillFilter.skillName}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={_handleSkillNameChange}
            />
          </div>
          <div className="w-100 mt3">
            <Button
              disableElevation
              className="w-100 bg-cyan"
              color="primary"
              variant="contained"
              onClick={_handleFilter}
            >
              Query User Skills
            </Button>
          </div>
        </GridCard>
        <GridCard xs={12} md={7} lg={9}>
          {
            uiStore.userSkillFilter.skip && !data.admin.userSkills.length
              ? (
                <div className="flex justify-center items-center h4">
                  <Typography variant="subtitle1">No more Records to show. Go back to previous list</Typography>
                </div>
              )
              : <ViewSkillsList  userSkills={data ? data.admin.userSkills : []} />
          }
          {
            data
              ? (
                <ul className="list pl0 mv0">
                  <li className="flex justify-between items-center lh-copy pa3 ph0-l bt b--black-10">
                    <Button
                      color="primary"
                      startIcon={<KeyboardArrowLeftIcon />}
                      onClick={_gotoPrev}
                      disabled={uiStore.userSkillFilter.skip === 0}

                    >
                      Prev
                    </Button>
                    <Button
                      color="primary"
                      endIcon={<KeyboardArrowRightIcon />}
                      onClick={_gotoNext}
                      disabled={data.admin.userSkills.length < 10}
                    >
                      Next
                    </Button>
                  </li>
                </ul>
                )
              : null
          }
        </GridCard>
      </Grid>
    );
  });
};

export default ReviewSkillsView;
