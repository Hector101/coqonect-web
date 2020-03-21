import React, { FunctionComponent } from 'react';

import SkillCategoryCard from 'src/components/HomePage/SkillCategoryCard';

const ExploreSkillCategory: FunctionComponent<{}> = () => {
  return (
    <section className="c-ExploreSkillCategory">
      <div className="mh3 mh5-ns mv4">
        <h4 className="title tc">Explore Skill Categories</h4>
        <div className="flex-ns w-100 justify-between">
          <SkillCategoryCard />
          <SkillCategoryCard />
          <SkillCategoryCard />
        </div>
      </div>
    </section>
  );
};

export default ExploreSkillCategory;
