import React, { FunctionComponent } from 'react';

import OutlinedCard from 'src/components/Card';

const SkillCategory: FunctionComponent<{}> = () => {
  return (
    <section className="c-skillCategorySection">
      <div>
        <h3 className="tc">What skill do you need help with?</h3>
      </div>
      <div>
        <h4 className="tc">Explore Skill Categories</h4>
        <div className="c-cardWrapper flex-ns w-100 justify-between">
          <OutlinedCard />
          <OutlinedCard />
          <OutlinedCard />
        </div>
      </div>
    </section>
  );
};

export default SkillCategory;
