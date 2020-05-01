import React, { FunctionComponent, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';

import ViewSkillsTable from 'src/components/AdminLayout/ReviewSkillsView/ViewSkillsTable';

import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

import { TQuery } from 'src/apolloTypes';
import { AUTHENTICATED_ADMIN } from 'src/queries';


type OptionType = {
  value: string;
  label: string;
};


const options: OptionType[] = [
  {value: 'pending', label: 'Pending'},
  {value: 'unverified', label: 'Unverified'},
  {value: 'verified', label: 'Verified'},
];


const ReviewSkillsView: FunctionComponent<{}> = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 'pending', label: 'Pending' });

  const{ data: userData, loading: userLoading } = useQuery<TQuery>(AUTHENTICATED_ADMIN,
    { variables: { status: selectedOption.value, take: 20, skip: 0 },
  });


  if (userLoading || !userData) {
    return <LoadingPage />;
  }

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  const { userSkills } = userData.admin;
  return (
    <div>
      <div className="w-100">
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          className="w5"
        />
      </div>
      <ViewSkillsTable  userSkills={userSkills} />
    </div>
  );
};

export default observer(ReviewSkillsView);
