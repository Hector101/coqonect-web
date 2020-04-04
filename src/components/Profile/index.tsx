import React, { FunctionComponent, SyntheticEvent, useState, ChangeEvent } from 'react';
import Rating from 'react-rating';
import { useQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';

import Button from 'src/components/Shared/Button';
import LazyLoadImage from 'src/components/Shared/LazyLoadImage';
import LoadingPage from 'src/components/Shared/LoadingPage';
import EditProfileForm from 'src/components/Profile/EditProfileForm';
import ChangePasswordForm from 'src/components/Profile/ChangePasswordForm';
import AboutMeSection from 'src/components/Profile/AboutMeSection';

import EdirPencil from '../../../public/svgs/EditPencil.svg';
import Gear from '../../../public/svgs/Gear.svg';
import Mentorship from '../../../public/svgs/Mentorship.svg';
import Verify from '../../../public/svgs/Verify.svg';
import RightArrow from '../../../public/svgs/RightArrow.svg';
import Plus from '../../../public/svgs/Plus.svg';
import DownArrow from '../../../public/svgs/DownArrow.svg';
import EmptyStar from '../../../public/svgs/EmptyStar.svg';
import FullStar from '../../../public/svgs/FullStar.svg';
import LocationIcon from '../../../public/svgs/LocationIcon.svg';

import CustomTab from 'src/components/Shared/CustomTab';
import TabContainer from 'src/components/Shared/TabContainer';
import ImageUploadModal from 'src/components/Profile/ImageUploadModal';
import AddSkillModal from 'src/components/Profile/AddSkillModal';
import UserSkillsTable from 'src/components/Profile/UserSkillsTable';

import { countryListAlpha2 } from 'src/tempData/countryList';

import { TQuery } from 'src/apolloTypes';

import { useStore } from 'src/store';

import { AUTHENTICATED_USER } from 'src/queries';

const Profile: FunctionComponent<{}> = () => {
  const{ data: userData, loading: userLoading, refetch } = useQuery<TQuery>(AUTHENTICATED_USER);

  const { uiStore, userStore } = useStore();
  const [file, setFile] = useState(null);

  if (userLoading || !userData) {
    return <LoadingPage />;
  }

  const {
      profile: { fullName, imageUrl,  bio, city, country },
      profile,
      email,
      skills,
    } = userData.client.authenticatedUser;

  const countryName = countryListAlpha2[country];

  const _openDialog = (e: SyntheticEvent<HTMLSpanElement> | SyntheticEvent<HTMLButtonElement>) => {
    uiStore.openDialog(e.currentTarget.id);
  };

  const _handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files[0];
    setFile(fileName);
  };

  const _handleImageUpload = () => {
    userStore.startImageUpload();
    userStore.handleImageUpload(
      file,
      () => {
        setFile(null);
        userStore.completeImageUpload();
        refetch();
        uiStore.setSnackBarSuccessMessage(userStore.imageUploadResponse.message);
        uiStore.closeDialog();
      },
      () => {
        userStore.completeImageUpload();
        uiStore.setSnackBarErrorMessage(userStore.imageUploadResponse.message);
      },
    );
  };

  return (
    <Paper elevation={0}>
      <ImageUploadModal
        handleAction={_handleImageUpload}
        onChange={_handleImageChange}
        disableActionButton={!(file)}
        actionProgressStatus={userStore.uploadingImage}
      />
      <AddSkillModal />
      <div className="ph4 mw8 center bg-white">
        <section className="bb b--black-10 pv4 mb4 flex flex-column flex-row-ns items-start justify-between">
          <div className="flex items-center w-100 w-50-ns justify-center justify-start-ns">
            <div className="relative w4 h4">
              <LazyLoadImage
                srcName={imageUrl}
                fallbackIconName="ProfilePic"
                className="w4 h4 br-100 ba b--black-20"
              />
              <span id="uploadPic" onClick={_openDialog} className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
                <EdirPencil className="w1 h1 fill-white"/>
              </span>
            </div>
            <div className="ml3 ml4-ns">
              <h4 className="mv3 ttc">{fullName}</h4>
              <div className="flex items-center mv2">
                <LocationIcon className="h1 w1 mr1" />
                <span className="f7">{city} {', '} {countryName}</span>
              </div>
              <div className="mv2">
                <Rating
                  emptySymbol={<EmptyStar href="#icon-star-empty" className="w1 h1" />}
                  fullSymbol={<FullStar href="#icon-star-full" className="w1 h1 fill-orange" />}
                  initialRating={3}
                  readonly={true}
                />
              </div>
            </div>
          </div>
          <div className="w-100 w-50-ns mt4 mt0-ns">
            <section className="br1 ba b--black-10 ">
              <h2 className="f6 bg-light-gray b br1 br--top black-80 mv0 pv2 ph3 ttu">More About Me</h2>
              <AboutMeSection bio={bio} />
            </section>
          </div>
        </section>
        <section className="pv4">
          <CustomTab>
            <TabContainer title={'Edit Profile'}>
              <EditProfileForm profile={{email, ...profile}} />
            </TabContainer>
            <TabContainer title={'Change Password'}>
              <ChangePasswordForm />
            </TabContainer>
          </CustomTab>
        </section>
        <section className="w-100 pv2">
          <h3 className="ttu">Mentors Only</h3>
          <CustomTab>
            <TabContainer title={'My Skills'}>
              <div className="flex flex-column flex-row-ns items-center justify-between justify-around-ns pv4 tc ba b--black-10">
                <div>
                  <div className="relative">
                    <Gear className="w3 h3"/>
                    <Plus className="w1 h1 absolute bottom-0 right--1" />
                  </div>
                  <p className="f7">ADD SKILLS</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div>
                  <Verify className="w3 h3"/>
                  <p className="f7">WE VERIFY THOSE SKILLS</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div>
                  <Mentorship className="w3 h3"/>
                  <p className="f7">OFFER MENTORSHIP ON VERIFIED SKILLS</p>
                </div>
              </div>
              <div className="pv4 flex-column justify-center">
                <div className="pv2 flex justify-center">
                  <Button
                    id="add-skill"
                    className="bn br1 bg-primary-blue  white pointer f7 pv2 ph3"
                    type="button"
                    onClick={_openDialog}
                  >
                    ADD SKILLS
                  </Button>
                </div>
                <div className={classnames('overflow-auto', { dn: !skills.length })}>
                  <UserSkillsTable skills={skills} />
                </div>
              </div>
            </TabContainer>
            <TabContainer title={'Mentorship Curriculum'}>
              <div className="w-100 h5">Create Mentorship Curriculum</div>
            </TabContainer>
          </CustomTab>
        </section>
      </div>
    </Paper>
  );
};

export default observer(Profile);
