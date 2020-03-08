import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { EditorState, ContentState } from 'draft-js';

import Input from 'src/components/Shared/Input';
import Button from 'src/components/Shared/Button';
import { RichEditor } from 'src/components/Shared/RichEditor';

import { TProfile } from 'src/apolloTypes';
import { TFormMethod } from 'src/interfaces/Forms';

type EditProfileValues = Omit<TProfile, 'imageUrl'>;

type Props = {
  profile: TProfile & { email: string; };
};

const validationSchema = yup.object().shape({
  fullName: yup.string()
    .required('Required'),
  city: yup.string()
    .required('Required'),
  country: yup.string()
    .required('Required'),
});

const EditProfileForm: FunctionComponent<Props> = ({ profile }) => {

  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(ContentState.createFromText(profile.bio)),
  );

  const _handleProfileEdit = async (_values: EditProfileValues, { setSubmitting }: TFormMethod) => {
    setSubmitting(true);
    // tslint:disable-next-line: no-console
    console.log('Submitting...');
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      city: '',
      country: '',
      ...profile,
    },
    onSubmit: _handleProfileEdit,
    validationSchema,
  });

  const {
    values: { email, fullName, city, country },
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-column flex-row-ns justfy-between items-center">
        <div className="w-100 pv2 pr0 pr5-ns">
          <label htmlFor="email" className="f5 b black-50">
            Email Address
            <span className="f6 orange"> (Not Editable)</span>
          </label>
          <Input
            className="pv3 pr2 f6 input-reset bg-transparent w-100"
            containerClassName="mt2"
            defaultType="text"
            placeholder="Enter E-mail"
            name="text"
            value={email}
            leftIconName="Email"
          />
        </div>
        <div className="w-100 mv2">
          <label htmlFor="fullName" className="f5 b black-50">Full Name</label>
          <Input
            className="pv3 ph3 f6 input-reset bg-transparent w-100"
            containerClassName="mt2"
            defaultType="text"
            placeholder="Enter Fullname"
            name="fullName"
            value={fullName}
            error={errors.fullName}
            onChange={handleChange}
            leftIconName="FullNameAvatar"
          />
        </div>
      </div>
      <div className="flex flex-column flex-row-ns justfy-center items-center">
        <div className="w-100 pv2 pr0 pr5-ns">
          <label htmlFor="city" className="f5 b black-50">City</label>
          <Input
            className="pv3 ph3 f6 input-reset bg-transparent w-100"
            containerClassName="mt2"
            defaultType="text"
            placeholder="Enter City"
            name="city"
            value={city}
            error={errors.city}
            onChange={handleChange}
            leftIconName="CityIcon"
          />
        </div>
        <div className="w-100 mv2">
          <label htmlFor="country" className="f5 b black-50">Country</label>
          <Input
            className="pv3 ph3 f6 input-reset bg-transparent w-100"
            containerClassName="mt2"
            defaultType="text"
            placeholder="Enter Country"
            name="country"
            value={country}
            error={errors.country}
            onChange={handleChange}
            leftIconName="LocationIcon"
          />
        </div>
      </div>
      <div className="mt2">
        <label htmlFor="bio" className="f5 b black-50">About Me</label>
        <RichEditor
          editorState={editorState}
          onChange={setEditorState}
          containerClassName="mt2"
          setFieldValue={setFieldValue}
        />
      </div>
      <Button
        className="bn br1 bg-primary-blue  white pointer f6 pv2 ph4 ph3 w-100 w-auto-ns mt2"
        type="button"
        disabled={
          !!(errors.fullName) ||
          !!(errors.country) ||
          !!(errors.city) ||
          !(fullName) ||
          !(country) ||
          !(city) ||
          isSubmitting
        }
      >
        Save
      </Button>
    </form>
  );
};

export default EditProfileForm;
