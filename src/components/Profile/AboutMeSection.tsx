import React, { FunctionComponent } from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import HtmlFromString from 'src/components/Shared/HtmlFromString';

import { SVGS } from 'src/components/Shared/SVGS';

type Props = {
  bio: string | null;
};

const AboutMeSection: FunctionComponent<Props> = ({ bio }) => {
  const htmlString = bio
    ? stateToHTML(convertFromRaw(JSON.parse(bio)))
    : bio;

  return (
      <div className="c-AboutMeSection pv2 ph3 bt b--black-10">
        <div className="c-about-me-continer f7 f6-ns lh-copy">
          {
            htmlString
              ? <HtmlFromString htmlString={htmlString} />
              : <span className="black-50">About Me description not added yet.</span>
          }
        </div>
        <span className="flex items-center f6 primary-blue">
          <SVGS.SeeMore className="w1 h1 fill-primary-blue mr2" />
          More
        </span>
      </div>
  );
};

export default AboutMeSection;
