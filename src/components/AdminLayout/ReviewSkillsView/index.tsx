import React, { FunctionComponent, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react-lite';
import Select, { ValueType } from 'react-select';

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


const Admin: FunctionComponent<{}> = () => {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>();

  const{ data: userData, loading: userLoading } = useQuery<TQuery>(AUTHENTICATED_ADMIN,
    { variables: { status: selectedOption, take: 20, skip: 0 },
  });


  if (userLoading || !userData) {
    return <LoadingPage />;
  }

  const handleChange = (option: ValueType<OptionType>) => {
    setSelectedOption(option);
  };

  const { userSkills } = userData.admin;
  return (
    <div>
      <Select
        value={selectedOption as ValueType<OptionType>}
        onChange={handleChange}
        options={options}
      />
      <ViewSkillsTable  userSkills={userSkills} />
    </div>
  );
};

export default observer(Admin);
