import React, { FunctionComponent, useState } from 'react';
import Select from 'react-select';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';


import CustomDialog from 'src/components/Shared/CustomDialog';
import Input from 'src/components/Shared/Input';

import { SKILL_CATEGORIES, ADD_USER_SKILL } from 'src/queries';

import { TQuery, TMutation } from 'src/apolloTypes';

import { groupedSelectionOptions, getGraphQLMessage } from 'src/lib';

import { useStore } from 'src/store';

const validationSchema = yup.object().shape({
  description: yup.string()
    .required('Required'),
});

const formatGroupLabel = (data: any) => (
  <div className="flex items-center justify-between">
    <span>{data.label}</span>
    <span className="c-groupBadgeStyles ml2">{data.options.length}</span>
  </div>
);

const AddSkillModal: FunctionComponent<{}> = () => {
  const { uiStore } = useStore();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const { data: skillsData, loading: skillsLoading } = useQuery<TQuery>(SKILL_CATEGORIES);
  const [addUserSkill] = useMutation<TMutation>(ADD_USER_SKILL,
    {
      onCompleted(data) {
        uiStore.setSnackBarSuccessMessage(data.client.addUserSkill.message);
        uiStore.closeDialog();
        _resetForm();
      },
      onError(error) {
        uiStore.setSnackBarErrorMessage(getGraphQLMessage(error.message));
      },
    });

  const _handleChangeSelection = (selected: any) => {
    setSelectedSkill(selected);
  };

  const _addUserSkill = (values: { description: string; }) => {

    addUserSkill({ variables: { skillId: selectedSkill.id, description: values.description }});
  };

  const formik = useFormik({
    initialValues: {
      description: '',
    },
    onSubmit: _addUserSkill,
    validationSchema,
  });

  const {
    values: { description },
    errors,
    handleSubmit,
    handleChange,
    dirty,
    resetForm,
  } = formik;

  function _resetForm() {
    resetForm();
  }

  return (
    <CustomDialog
      dialogId="add-skill"
      title="Add Skill"
      actionText="Add"
      disableActionButton={
        !!(errors.description) ||
        !dirty ||
        !selectedSkill
      }
      actionProcessText="Adding..."
      darkenHeaderBackground={true}
      handleAction={handleSubmit}
    >
      <div className="c-AddSkillModal w-100 vh-50">
        <Select
          placeholder="Select Skill"
          className="c-select f5 w-100"
          sLoading={skillsLoading}
          isClearable={true}
          options={groupedSelectionOptions(skillsData?.client?.skillCategories)}
          formatGroupLabel={formatGroupLabel}
          onChange={_handleChangeSelection}
        />
        <h3 className="f6 f4-ns black-70">Describe your experience with selected skill</h3>
        <Input
          className="mt2"
          mainClassName="pa3 f5 w-100 h5 ba b--black-20"
          defaultType="textarea"
          name="description"
          placeholder="Write Here..."
          onChange={handleChange}
          value={description}
          error={errors.description}
          errorWithBorder={true}
        />
        <span className="f6 blue pointer mt1">See Example</span>
      </div>
    </CustomDialog>
  );
};

export default AddSkillModal;
