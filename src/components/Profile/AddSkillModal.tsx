import React, { FunctionComponent, useState } from 'react';
import Select from 'react-select';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Typography from '@material-ui/core/Typography';

import CustomDialog from 'src/components/Shared/CustomDialog';
import Input from 'src/components/Shared/Input';

import { SKILL_CATEGORIES, ADD_USER_SKILL } from 'src/queries';

import { TQuery, TMutation } from 'src/apolloTypes';

import { groupedSelectionOptions, getGraphQLMessage } from 'src/lib';

import { useStore } from 'src/store';

type TFormValues = {
  description: string;
  evidence: string;
  months: string;
  years: string;
};

const validationSchema = yup.object().shape({
  description: yup.string()
    .required('Required'),
  months: yup.number()
    .required('Required'),
  years: yup.number()
    .required('Required'),
  evidence: yup.string()
    .required('Required'),
});

const formatGroupLabel = (data: any) => (
  <div className="flex items-center justify-between">
    <span className="primary-blue f6">{data.label}</span>
    <span className="c-groupBadgeStyles ml2 primary-blue f6">{data.options.length}</span>
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

  const _addUserSkill = (values: TFormValues) => {

    addUserSkill({ variables: {
      skillId: selectedSkill.id,
      description: values.description,
      evidence: values.evidence,
      years: Number(values.years),
      months: Number(values.months),
    }});

  };

  const formik = useFormik({
    initialValues: {
      description: '',
      months: '',
      years: '',
      evidence: '',
    },
    onSubmit: _addUserSkill,
    validationSchema,
  });

  const {
    values: { description, months, years, evidence },
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
        !!(errors.evidence) ||
        !!(errors.months) ||
        !!(errors.years) ||
        !dirty ||
        !selectedSkill
      }
      actionProcessText="Adding..."
      darkenHeaderBackground={true}
      handleAction={handleSubmit}
    >
      <div className="c-AddSkillModal w-100 h-100">
        <div className="w-100">
          <Select
            placeholder="Select Skill"
            className="c-select f6 w-100 mt2"
            sLoading={skillsLoading}
            isClearable={true}
            options={groupedSelectionOptions(skillsData?.public?.skillCategories)}
            formatGroupLabel={formatGroupLabel}
            onChange={_handleChangeSelection}
          />
        </div>
        <div className="w-100 mt3">
          <Typography>Years of Experience</Typography>
          <div className="w-100 mt2 flex flex-column flex-row-ns items-center">
            <Input
              className="pa2 br1 f6 w-100 w-auto-ns mr2-ns mb2 mb0-ns outline-0"
              containerClassName="flex flex-column"
              defaultType="number"
              name="years"
              placeholder="Years"
              onChange={handleChange}
              value={years}
              error={errors.years}
              errorWithBorder={true}
              min={1}
            />
            <Input
              className="pa2 br1 f6 w-100 w-auto-ns outline-0"
              containerClassName="flex flex-column"
              defaultType="number"
              name="months"
              placeholder="Months"
              onChange={handleChange}
              value={months}
              error={errors.months}
              errorWithBorder={true}
              min={1}
              max={12}
            />
          </div>
        </div>

        <div className="w-100 mt3">
          <Typography>Provide Links to Evidence</Typography>
          <Typography variant="subtitle2" color="textSecondary">(For Admin Only)</Typography>
          <Input
            className="mt2"
            mainClassName="pa3 f6 w-100 h3 ba b--black-20 outline-0"
            defaultType="textarea"
            name="evidence"
            placeholder={`https://example.com\nhttps://example.com`}
            onChange={handleChange}
            value={evidence}
            error={errors.evidence}
            errorWithBorder={true}
          />
        </div>

        <div className="w-100 mt3">
          <Typography>Describe your experience with selected skill</Typography>
          <Input
            className="mt2"
            mainClassName="pa3 f6 w-100 h4 ba b--black-20 outline-0"
            defaultType="textarea"
            name="description"
            placeholder="Write Here..."
            onChange={handleChange}
            value={description}
            error={errors.description}
            errorWithBorder={true}
          />
        </div>
        <span className="f6 blue pointer mt1">See Example</span>
      </div>
    </CustomDialog>
  );
};

export default AddSkillModal;
