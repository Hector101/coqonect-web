import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { observer } from 'mobx-react-lite';


import SkillCategoryCard from 'src/components/HomePage/SkillCategoryCard';
import LoadingPage from 'src/components/Shared/LoadingPage';

import SkillsModal from 'src/components/HomePage/SkillsModal';


import { TQuery } from 'src/apolloTypes';
import {useStore} from 'src/store';

import { SKILL_CATEGORIES } from 'src/queries';

const ExploreSkillCategory: FunctionComponent<{}> = () => {
  const { data: userData, loading: skillsLoading } = useQuery<TQuery>(SKILL_CATEGORIES);

  const { skillStore } = useStore();

  if ( skillsLoading || !userData ) {
    return <LoadingPage />;
  }

  const { skillCategories } = userData.public;

  return (
    <>
      <SkillsModal skillCategory={skillStore.skillCategory} />
      <section className="c-ExploreSkillCategory">
        <div className="ph3 ph5-ns pv5">
          <h4 className="title tc">Explore Skill Categories</h4>
          <div className="w-100 justify-between">
            {
              skillCategories.map((skillCategory) => (
                <SkillCategoryCard key={skillCategory.id} skillCategory={skillCategory} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default observer(ExploreSkillCategory);
