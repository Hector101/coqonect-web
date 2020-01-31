import React, { FunctionComponent } from 'react';
import Select from 'react-select';

import Input from 'components/Shared/Input';
import ReccommendedMentorshipCard from 'components/Shared/ReccommendedMentorshipCard';
import FeaturedMentorCard from 'components/Shared/FeaturedMentorCard';
import Button from 'components/Shared/Button';

import Search from '../../static/svgs/Search.svg';
import SeeMore from '../../static/svgs/SeeMore.svg';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'premium', label: 'Premium' },
  { value: 'free', label: 'Free' },
];

const Dashboard: FunctionComponent<{}> = () => {
  return (
    <div className="c-Dashboard">
      <section className="flex flex-column flex-row-ns justify-between">
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
              className="pv1 ph3 br1 f7 ml1 bg-white c-find-by-skills-button"
              type="button"
              arial-label="search mentors by skills button"
            >
              <Search className="w1"/>
            </Button>
          </div>
        </div>
      </section>
      <section className="mb4">
        <div className="pt4 flex flex-column flex-row-ns justify-between">
          <ReccommendedMentorshipCard />
          <ReccommendedMentorshipCard />
          <ReccommendedMentorshipCard />
        </div>
        <a className="c-see-more flex flex-column items-center pointer pv2 pv4-ns">
          <span className="c-see-more-text">See More</span>
          <SeeMore className="c-see-more-icon w1 h1"/>
        </a>
      </section>
      <section>
        <div>
          <h3 className="mv0 f3">Featured Mentors</h3>
        </div>
        <div>
          <div className="pt3 flex flex-column flex-row-ns justify-start w-100">
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard />
          </div>
          <a className="c-see-more flex flex-column items-center pointer pv2 pv4-ns">
            <span className="c-see-more-text">See More</span>
            <SeeMore className="c-see-more-icon w1 h1"/>
        </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
