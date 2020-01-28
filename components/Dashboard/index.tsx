import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import Input from 'components/Shared/Input';
import ReccommendedMentorshipCard from 'components/Shared/ReccommendedMentorshipCard';
import FeaturedMentorCard from 'components/Shared/FeaturedMentorCard';
import Button from 'components/Shared/Button';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'premium', label: 'Premium' },
  { value: 'free', label: 'Free' },
];

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <div className="c-Dashboard">
      <section className="flex justify-between">
        <div>
          <h3 className="mb0">Recommended Mentorships</h3>
          <span className="f7">Most subscribed sessions recently.</span>
        </div>
        <div className="flex items-center">
          <Select
            options={filterOptions}
            placeholder="Filter By"
            defaultValue={filterOptions[0]}
            className="w4 mr3 f7"
          />
          <div className="flex items-center">
            <Input
              className="c-find-by-skills-input f7 bg-white"
              defaultType="search"
              placeholder="Find by skills"
              name="search"
            />
            <Button
              className="pv1 ph3 br1 f7 ml1 c-find-by-skills-button"
              type="button"
            >
              Search
            </Button>
          </div>
        </div>
      </section>
      <section className="pv4 flex justfy-center">
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
      </section>
      <section>
        <div>
          <h3 className="mb0">Featured Mentors</h3>
        </div>
        <div className="pv4 flex justfy-center">
          <FeaturedMentorCard />
          <FeaturedMentorCard />
          <FeaturedMentorCard />
          <FeaturedMentorCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
