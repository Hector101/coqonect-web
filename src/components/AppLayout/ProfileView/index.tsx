import React, { FunctionComponent, SyntheticEvent, useState, ChangeEvent } from 'react';
import Rating from 'react-rating';
import { useQuery } from '@apollo/react-hooks';
import { useObserver } from 'mobx-react-lite';
import classnames from 'classnames';

import Button from 'src/components/SharedLayout/Shared/Button';
import LazyLoadImage from 'src/components/SharedLayout/Shared/LazyLoadImage';
import EditProfileForm from 'src/components/AppLayout/ProfileView/EditProfileForm';
import ChangePasswordForm from 'src/components/AppLayout/ProfileView/ChangePasswordForm';
import AboutMeSection from 'src/components/AppLayout/ProfileView/AboutMeSection';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  EditPencil,
  Mentorship,
  Verify,
  RightArrow,
  AddSkill,
  DownArrow,
  EmptyStar,
  FullStar,
  LocationIcon,
  Curricullum,
  Modules,
  StartMentorship,
} = SVGS;

import CustomTab from 'src/components/SharedLayout/Shared/CustomTab';
import TabContainer from 'src/components/SharedLayout/Shared/TabContainer';
import ImageUploadModal from 'src/components/AppLayout/ProfileView/ImageUploadModal';
import AddSkillModal from 'src/components/AppLayout/ProfileView/AddSkillModal';
import UserSkillsTable from 'src/components/AppLayout/ProfileView/UserSkillsTable';

import { countryList } from 'src/tempData/countryList';

import { TQuery } from 'src/apolloTypes';

import { useStore } from 'src/store';

import { AUTHENTICATED_USER } from 'src/queries';

const ProfileView: FunctionComponent<{}> = () => {
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

  const countryName = countryList[country];

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

  return useObserver(() => (
    <>
      <ImageUploadModal
        handleAction={_handleImageUpload}
        onChange={_handleImageChange}
        disableActionButton={!(file)}
        actionProgressStatus={userStore.uploadingImage}
      />
      <AddSkillModal />
      <div className="mw8 center bg-white">
        <section className="bb b--black-10 pv4 mb4 flex flex-column flex-row-ns items-start justify-between">
          <div className="flex items-center w-100 w-50-ns justify-center justify-start-ns">
            <div className="relative w4 h4">
              <LazyLoadImage
                src={imageUrl}
                className="w4 h4 br-100 ba b--black-20"
              />
              <span id="uploadPic" onClick={_openDialog} className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
                <EditPencil className="w1 h1 fill-white"/>
              </span>
            </div>
            <div className="ml3 ml4-ns">
              <h4 className="mv3 ttc">{fullName}</h4>
              <div className="flex items-center mv2 f7">
                <LocationIcon className="h1 w1 mr1" />
                {!city || !countryName ? 'Unknown' : `${city}, ${countryName}`}
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
          <h3 className="ttu">For Mentors Only</h3>
          <CustomTab>
            <TabContainer title={'Manage Skills'}>
              <div className="flex flex-column flex-row-ns items-center justify-between justify-around-ns pv4 tc ba b--black-10">
                <div className="w-third">
                    <AddSkill className="w3 h3"/>
                  <p className="f7 ttu">add skills</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div className="w-third">
                  <Verify className="w3 h3"/>
                  <p className="f7 ttu">skill verification</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div className="w-third">
                  <Mentorship className="w3 h3"/>
                  <p className="f7 ttu">offer mentorship on skills</p>
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
            <TabContainer title={'Manage Curriculums'}>
              <div className="flex flex-column flex-row-ns items-center justify-between justify-around-ns pv4 tc ba b--black-10">
                <div>
                  <Curricullum className="w3 h3"/>
                  <p className="f7 ttu">create mentorship curricullum</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div>
                  <Modules className="w3 h3"/>
                  <p className="f7 ttu">add mentorship modules</p>
                </div>
                <RightArrow className="w1 h1 dn db-ns" />
                <DownArrow className="w1 h1 dn-ns mb3" />
                <div>
                  <StartMentorship className="w3 h3"/>
                  <p className="f7 ttu">start mentorship sessions</p>
                </div>
              </div>
              <div className="pv4 flex-column justify-center">
                <div className="pv2 flex justify-center">
                  <Button
                    id="create-curruicullum"
                    className="bn br1 bg-primary-blue  white pointer f7 pv2 ph3 ttu"
                    type="button"
                  >
                    create mentorship curricullum
                  </Button>
                </div>
              </div>
            </TabContainer>
          </CustomTab>
        </section>
      </div>
    </>
  ));
};

export default ProfileView;
