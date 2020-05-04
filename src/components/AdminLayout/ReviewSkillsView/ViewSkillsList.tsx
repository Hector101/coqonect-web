import React, { FunctionComponent } from 'react';

import { TUserSkills } from 'src/apolloTypes';
import Typography from '@material-ui/core/Typography';

import styles from 'src/styles/ViewSkillsList.module.scss';

type Props = {
  userSkills: TUserSkills[];
};

const ViewSkillsList: FunctionComponent<Props> = ({ userSkills }) => {

  if (!userSkills.length) {
    return (
      <div className="flex justify-center items-center h4">
        <Typography variant="subtitle1">No query record available</Typography>
      </div>
    );
  }

  return (
    <ul className="list pl0 mt0">
      <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
          <div className="pl3 flex-auto ttu b">
            Skill Info
          </div>
          <div className="b ttu">
            Status
          </div>
      </li>
      {
        userSkills.map((userskill) => (
          <li key={userskill.id} className={`flex items-center lh-copy pa3 ph0-l pointer hover-gray ${styles.hover}`}>
              <img className="w2 h2 w3-ns h3-ns br-100 ba b--black-10" src={userskill.profile.imageUrl} />
              <div className="pl3 flex-auto">
                <span className="f5 db b">{userskill.name}</span>
                <span className="f7 db black-70 ttc">{userskill.profile.fullName}</span>
              </div>
              <div>
              <div className={styles[userskill.status]}>{userskill.status}</div>
              </div>
          </li>
        ))
      }
    </ul>
  );
};

export default ViewSkillsList;
