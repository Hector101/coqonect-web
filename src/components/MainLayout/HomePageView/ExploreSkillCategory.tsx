import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useObserver } from 'mobx-react-lite';

import SkillCategoryCard from 'src/components/MainLayout/HomePageView/SkillCategoryCard';
import Loading from 'src/components/SharedLayout/Shared/Loading';
import Slider from 'src/components/SharedLayout/Shared/Slider';
import SkillsModal from 'src/components/MainLayout/HomePageView/SkillsModal';

import { TQuery } from 'src/apolloTypes';
import {useStore} from 'src/store';

import { SKILL_CATEGORIES } from 'src/queries';

const ExploreSkillCategory: FunctionComponent<{}> = () => {
  const { data: userData, loading: skillsLoading } = useQuery<TQuery>(SKILL_CATEGORIES);

  const { skillStore } = useStore();

  return useObserver(() => {
    if ( skillsLoading || !userData ) {
      return <Loading />;
    }
    const { skillCategories } = userData.public;

    return (
      <>
        <SkillsModal skillCategory={skillStore.skillCategory} />
        <section className="c-ExploreSkillCategory">
          <div className="ph4 pv5">
            <h4 className="title tc">Explore Skill Categories</h4>
            <Slider numberOfSlide={4}>
              {
                skillCategories.map((skillCategory) => (
                  <SkillCategoryCard key={skillCategory.id} skillCategory={skillCategory} />
                ))
              }
            </Slider>
          </div>
        </section>
      </>
    );
  });
};

export default ExploreSkillCategory;
