import React, { FunctionComponent, Fragment } from 'react';

import Divider from '@material-ui/core/Divider';

import CustomDialog from 'src/components/Shared/CustomDialog';

import { TSkillCategories } from 'src/apolloTypes';

type Props = {
  skillCategory: TSkillCategories;
};

const SkillCard: FunctionComponent<Props> = ({skillCategory}) => {

  return (
    <CustomDialog
      dialogId="view-skill"
      title="View Skill"
      darkenHeaderBackground={true}
    >
      <ul className="list pa0 ma0">
      {
        skillCategory.skills.map((skill) => {
          return (
            <Fragment key={skill.id}>
              <li  className="pv3 tc">{skill.name}</li>
              <Divider />
            </Fragment>
          );
        })
      }
    </ul>
    </CustomDialog>
  );
};

export default SkillCard;
