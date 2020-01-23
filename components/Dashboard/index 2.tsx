import React, { FunctionComponent } from 'react';

import Input from 'components/Shared/Input';
import ReccommendedMentorshipCard from 'components/Shared/ReccommendedMentorshipCard';

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="mb0">Recommended Mentorships</h3>
          <span className="f7">Most subscribed sessions recently.</span>
        </div>

        <Input
          className="pv3 pr2 f6 input-reset bg-white w-100 mb1"
          defaultType="search"
          placeholder="Find Mentorship by skills"
          name="search"
          value={''}
          leftIconName="Search"
          noBorders={true}
        />
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
