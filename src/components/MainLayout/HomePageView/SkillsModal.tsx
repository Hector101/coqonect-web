import React, { FunctionComponent, Fragment } from 'react';

import Divider from '@material-ui/core/Divider';

import CustomDialog from 'src/components/SharedLayout/Shared/CustomDialog';

import { TSkillCategory } from 'src/apolloTypes';

type Props = {
  skillCategory: TSkillCategory;
};

const SkillsModal: FunctionComponent<Props> = ({skillCategory}) => {

  return (
    <CustomDialog
      dialogId={`view-skill-${skillCategory.id}`}
      title="View Skill"
      darkenHeaderBackground={true}
    >
      <ul className="list w-100 h5 ma0 pa0">
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

export default SkillsModal;
