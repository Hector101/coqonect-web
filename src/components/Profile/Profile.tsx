import React, { FunctionComponent } from 'react';
import Rating from 'react-rating';
import { useQuery } from '@apollo/react-hooks';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import * as yup from 'yup';

import Input from 'src/components/Shared/Input';
import TextArea from 'src/components/Shared/TextArea';
import Button from 'src/components/Shared/Button';
import LazyLoadImage from 'src/components/Shared/LazyLoadImage';
import LoadingPage from 'src/components/Shared/LoadingPage';

// import truncateText from 'src/lib/truncateText';

import EdirPencil from '../../../public/svgs/EditPencil.svg';
import Gear from '../../../public/svgs/Gear.svg';
import Mentorship from '../../../public/svgs/Mentorship.svg';
import Verify from '../../../public/svgs/Verify.svg';
import RightArrow from '../../../public/svgs/RightArrow.svg';
import Plus from '../../../public/svgs/Plus.svg';
import DownArrow from '../../../public/svgs/DownArrow.svg';
import EmptyStar from '../../../public/svgs/EmptyStar.svg';
import FullStar from '../../../public/svgs/FullStar.svg';

import { ProfileUseQueryProps, Profile as ProfileType } from 'src/types';

type FormMethod = {
  setSubmitting: (isSubmitting: boolean) => void;
};

type EditProfileValues = Omit<ProfileType, 'imageUrl'>;

const AUTHENTICATED_USER = gql`
  query {
    client {
      authenticatedUser {
        email
        profile {
          fullName
          imageUrl
          city
          country
          bio
        }
      }
    }
  }
`;

const editProfileValidationSchema = yup.object().shape({
  fullName: yup.string()
    .required('Required'),
  city: yup.string()
    .required('Required'),
  country: yup.string()
    .required('Required'),
  bio: yup.string()
  .required('Required'),
});

const Profile: FunctionComponent<{}> = () => {
  const _handleProfileEdit = async (_values: EditProfileValues, { setSubmitting }: FormMethod) => {
    setSubmitting(true);

    console.log('Submitting...');

    setSubmitting(false);
  };

  const{ data, loading } = useQuery<ProfileUseQueryProps>(AUTHENTICATED_USER);

  if (loading || !data) {
    return <LoadingPage />;
  }

  const { profile: { imageUrl }, profile, email } = data.client.authenticatedUser;

  return (
    <div className="ph4">
      <section className="bb b--black-10 pv3 flex flex-column flex-row-ns items-center justify-between">
        <div className="flex flex-column flex-row-ns justify-between items-center w-100">
          <div className="relative w4 h4 mb5">
            <LazyLoadImage
              srcName={imageUrl}
              fallbackIconName="ProfilePic"
              className="w4 h4 br-100"
            />
            <span className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
              <EdirPencil className="w1 h1 fill-white"/>
            </span>
            <div className="pv1">
              <Rating
                emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                initialRating={3}
                readonly={true}
              />
            </div>
          </div>
          <div className="ml3 ml4-ns w-100 w-50-ns">
            <Formik
              initialValues={{
                fullName: '',
                city: '',
                country: '',
                bio: '',
                ...profile,
              }}
              onSubmit={_handleProfileEdit}
              validationSchema={editProfileValidationSchema}
            >
              {({
                values: editProfileValues,
                // errors: editProfileErrors,
                // isSubmitting: editProfileSubmitting,
                handleSubmit: handleEditProfileSubmit,
                handleChange: handleEditProfileInputChange,
              }) => (
                <form onSubmit={handleEditProfileSubmit}>
                  <label className="f5">Email Address</label>
                  <Input
                    className="pv3 pl2 pr2 f6 input-reset bg-transparent w-100 mt2 mb3"
                    defaultType="text"
                    placeholder="Enter E-mail"
                    name="text"
                    value={email}
                    onChange={handleEditProfileInputChange}
                  />
                  <label className="f5">Fullname</label>
                  <Input
                    className="pv3 pl2 pr2 f6 input-reset bg-transparent w-100 mt2 mb3"
                    defaultType="text"
                    placeholder="Enter Fullname"
                    name="fullName"
                    value={editProfileValues.fullName}
                    onChange={handleEditProfileInputChange}
                  />
                  <label className="f5">City</label>
                  <Input
                    className="pv3 pl2 pr2 f6 input-reset bg-transparent w-100 mt2 mb3"
                    defaultType="text"
                    placeholder="Enter City"
                    name="city"
                    value={editProfileValues.city}
                    onChange={handleEditProfileInputChange}
                  />
                  <label className="f5">Country</label>
                  <Input
                    className="pv3 pl2 pr2 f6 input-reset bg-transparent w-100 mt2 mb3"
                    defaultType="text"
                    placeholder="Enter Country"
                    name="country"
                    value={editProfileValues.country}
                    onChange={handleEditProfileInputChange}
                  />
                  <label className="f5">Bio</label>
                  <TextArea
                    className="pv3 pl2 pr2 f6 input-reset bg-transparent w-100 mt2 mb3 c-textarea"
                    placeholder="Enter bio"
                    name="bio"
                    onChange={handleEditProfileInputChange}
                    value={editProfileValues.bio}
                  />
                  <Button
                    className="bn br1 bg-primary-blue  white pointer f5 pv2 ph3 w-100 w-auto-ns"
                    type="button"
                  >
                    Save
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <section className="w-100 pv4">
        <div className="flex flex-column flex-row-ns items-center justify-between justify-around-ns pv4 tc ba b--black-10">
          <div>
            <div className="relative">
              <Gear className="w3 h3 fill-primary-blue"/>
              <Plus className="w1 h1 absolute bottom-0 right--1 fill-primary-blue" />
            </div>
            <p className="f7 f6-ns">ADD SKILLS</p>
          </div>
          <RightArrow className="w1 h1 dn db-ns" />
          <DownArrow className="w1 h1 dn-ns mb3" />
          <div>
            <Verify className="w3 h3 fill-primary-blue"/>
            <p className="f7 f6-ns">WE VERIFY THOSE SKILLS</p>
          </div>
          <RightArrow className="w1 h1 dn db-ns" />
          <DownArrow className="w1 h1 dn-ns mb3" />
          <div>
            <Mentorship className="w3 h3 fill-primary-blue"/>
            <p className="f7 f6-ns">OFFER MENTORSHIP ON VERIFIED SKILLS</p>
          </div>
        </div>
        <div className="pv5 flex justify-center">
          <Button className="bn br1 bg-primary-blue  white pointer f5 pv2 ph3" type="button">ADD SKILLS</Button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
