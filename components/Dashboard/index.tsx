import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import Input from 'components/Shared/Input';
import ReccommendedMentorshipCard from 'components/Shared/ReccommendedMentorshipCard';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'premium', label: 'Premium' },
  { value: 'free', label: 'Free' },
];

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="mb0">Recommended Mentorships</h3>
          <span className="f7">Most subscribed sessions recently.</span>
        </div>
        <div className="flex">
          <Select
            options={filterOptions}
            placeholder="Filter By"
            defaultValue={filterOptions[0]}
            className="w4 mr2"
          />
          <Input
            className="f6 bg-white pv2"
            defaultType="search"
            placeholder="Find by skills"
            name="search"
            value={''}
          />
        </div>
      </div>
      <div className="pv4 flex justfy-center">
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
      </div>
    </div>
  );
};

export default Dashboard;
