import React, { FunctionComponent } from 'react';

import Button from 'components/Shared/Button';

import truncateText from 'lib/truncateText';

import EdirPencil from '../../static/svgs/EditPencil.svg';
import ProfilePic from '../../static/svgs/ProfilePic.svg';
import Gear from '../../static/svgs/Gear.svg';
import Mentorship from '../../static/svgs/Mentorship.svg';
import Verify from '../../static/svgs/Verify.svg';
import RightArrow from '../../static/svgs/RightArrow.svg';
import Plus from '../../static/svgs/Plus.svg';
import DownArrow from '../../static/svgs/DownArrow.svg';

const bio = `But I must explain to you how all this mistaken idea of denouncing pleasure
and praising pain was born and I will give you a complete account of the
 system, and expound the actual teachings of the great explorer of the
  truth, the master-builder of human happiness. No one rejects, dislikes,
   or avoids pleasure itself, because it is pleasure, but because those who
    do not know how to pursue pleasure rationally encounter consequences that
     are extremely painful. Nor again is there anyone who loves or pursues
      or desires to obtain pain of itself, because it is pain, but because
      occasionally circumstances occur in which toil and pain can procure
       him some great pleasure. To take a trivial example, which of us ever
        undertakes laborious physical exercise, except to obtain some advantage
         from it? But who has any right to find fault with a man who chooses to
          enjoy a pleasure that has no annoying consequences, or one who avoids
           a pain that produces no resultant pleasure?`;


const Profile: FunctionComponent<{}> = () => {
  return (
    <div className="ph4">
      <section className="bb b--black-10 pv3 flex flex-column flex-row-ns items-start justify-between">
        <div className="flex items-center w-100 w-50-ns">
          <div className="relative w4 h4">
            <ProfilePic className="w4 h4 br-100"/>
            <span className="w15 h15 br-100 bg-orange absolute bottom-1 right-0 pointer flex justify-center items-center">
              <EdirPencil className="w1 h1 fill-white"/>
            </span>
          </div>
          <div className="ml3 ml4-ns">
            <h4 className="mv2">Hector Johnson Okoro</h4>
            <span className="f7">Lagos, Nigeria</span>
          </div>
        </div>
        <div className="w-100 w-50-ns">
          <h4>About Me</h4>
          <p className="f7 lh-copy pointer">
            {truncateText(bio, 300)}
          </p>
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
