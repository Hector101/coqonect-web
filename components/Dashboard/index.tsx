import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import Input from 'components/Shared/Input';
import ReccommendedMentorshipCard from 'components/Shared/ReccommendedMentorshipCard';
import FeaturedMentorCard from 'components/Shared/FeaturedMentorCard';
import Button from 'components/Shared/Button';
import Search from "../../static/svgs/Search.svg";

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'premium', label: 'Premium' },
  { value: 'free', label: 'Free' },
];

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <div className="c-Dashboard">
      <section className="flex-l justify-between-l">
        <div className="mv2 mv0-ns">
          <h3 className="mb0 f3">Recommended Mentorships</h3>
          <span className="f6">Most subscribed sessions recently.</span>
        </div>
        <div className="flex items-center-l">
          <Select
            options={filterOptions}
            placeholder="Filter By"
            defaultValue={filterOptions[0]}
            className="w4 mr3-l f7"
          />
          <div className="flex items-center-l">
          <Input
              className="c-find-by-skills-input w-100 f7 ph3 bg-white"
              defaultType="search"
              placeholder="Find by skills"
              name="search"
            />
            <Button
              className="pv1 ph3 br1 f7 ml0 bg-white c-find-by-skills-button"
              type="button"
              arial-label="search mentors by skills button"
            >
              <Search className="w1"/>
            </Button>
          </div>
        </div>
      </section>
      <section className="pv4 flex-m justify-between-m flex-l justify-between-l">
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
        <ReccommendedMentorshipCard />
      </section>
      <section>
        <div>
          <h3 className="mv0 f3">Featured Mentors</h3>
        </div>
        <div className="pv4 flex flex-column flex-row-ns justify-start w-100">
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
