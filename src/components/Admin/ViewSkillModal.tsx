import React, { FunctionComponent } from 'react';

import CustomDialog from 'src/components/Shared/CustomDialog';

type Props = {
  id?: string;
};

const ViewSkillModal: FunctionComponent<Props> = ({id}) => {
  return (
    <CustomDialog
      dialogId={id}
      title="User Skill"
      darkenHeaderBackground={true}
    >
      <h1>Skill modal </h1>
    </CustomDialog>
  );
};

export default ViewSkillModal;
