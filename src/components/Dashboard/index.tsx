import React, { FunctionComponent } from 'react';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';

import Input from 'src/components/Shared/Input';
import ReccommendedMentorshipCard from 'src/components/Shared/ReccommendedMentorshipCard';
import FeaturedMentorCard from 'src/components/Shared/FeaturedMentorCard';
import Button from 'src/components/Shared/Button';

import { SVGS } from 'src/components/Shared/SVGS';

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'premium', label: 'Premium' },
  { value: 'free', label: 'Free' },
];

const Dashboard: FunctionComponent<{}> = () => {

  return (
    <div className="c-Dashboard mw8 center bg-white">
      <section className="pa0 pv3-ns ph0-ns flex flex-column flex-row-ns justify-between">
        <div className="mv3 mv0-ns">
          <Typography variant="h5">Recommended Mentorships</Typography>
          <Typography variant="subtitle2">Most subscribed sessions recently.</Typography>
        </div>
        <div className="flex items-center-l mv3 mv0-ns">
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
              <SVGS.Search className="w1"/>
            </Button>
          </div>
        </div>
      </section>
      <section className="mb4">
        <div className="pa0 pv3-ns ph0-ns flex flex-column flex-row-ns justify-between">
          <ReccommendedMentorshipCard />
          <ReccommendedMentorshipCard />
          <ReccommendedMentorshipCard />
        </div>
        <div className="flex justify-center">
          <a className="c-see-more inline-flex flex-column items-center pointer pv2 pv4-ns">
            <span className="c-see-more-text primary-blue">See More</span>
            <SVGS.SeeMore className="c-see-more-icon w1 h1 fill-primary-blue"/>
          </a>
        </div>
      </section>
      <section>
        <div className="ph3 ph0-ns">
          <Typography variant="h5">Featured Mentors</Typography>
        </div>
        <div>
          <div className="pa3 pv3-ns ph0-ns flex flex-column flex-row-ns justify-start w-100">
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard withMarginRight={true} />
            <FeaturedMentorCard />
          </div>
          <div className="flex justify-center">
            <a className="c-see-more inline-flex flex-column items-center pointer pv2 pv4-ns">
              <span className="c-see-more-text primary-blue">See More</span>
              <SVGS.SeeMore className="c-see-more-icon w1 h1 fill-primary-blue"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
