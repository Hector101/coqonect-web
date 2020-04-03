import React, { FunctionComponent, Fragment, SyntheticEvent } from 'react';
import { observer } from 'mobx-react-lite';

import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { RenderSVG } from 'src/components/Shared/SVGS';

import SkillCard from 'src/components/HomePage/SkillCard';

import { TSkillCategories } from 'src/apolloTypes';

import { useStore } from 'src/store';

type Props = {
  skillCategory: TSkillCategories;
};

const SkillCategoryCard: FunctionComponent<Props> = ({ skillCategory }) => {
  const { uiStore } = useStore();

  const _openDialog = (e: SyntheticEvent<HTMLSpanElement> | SyntheticEvent<HTMLButtonElement>) => {
    uiStore.openDialog(e.currentTarget.id);
  };

  return (
    <>
      <SkillCard skillCategory={skillCategory} />
      <div className="c-SkillCategoryCard ba b--black-10 mv4 mv0-ns">
        <div className="tc flex justify-center items-center bg-cyan">
          <RenderSVG name={skillCategory.name} className="w1 h1 fill-white"/>
          <h3 className="b f5 ml2 white">{skillCategory.name}</h3>
        </div>
        <ul className="list pa0 ma0">
          {
            skillCategory.skills.map((skill, index) => {
              if (index < 4) {
                return (
                  <Fragment key={skill.id}>
                    <li  className="pv3 tc">{skill.name}</li>
                    <Divider />
                  </Fragment>
                );
              }
              return null;
            })
          }
        </ul>
        <div
          className="pv3 flex justify-center items-center blue pointer"
          id="view-skill"
          onClick={_openDialog}
        >
          <ExpandMoreIcon />
          More...
        </div>
      </div>
    </>
  );
};

export default observer(SkillCategoryCard);
