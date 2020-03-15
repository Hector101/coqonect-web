import React, { FunctionComponent } from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import HtmlFromString from 'src/components/Shared/HtmlFromString';

type Props = {
  bio: string | null;
};

const AboutMeSection: FunctionComponent<Props> = ({ bio }) => {
  const htmlString = bio
    ? stateToHTML(convertFromRaw(JSON.parse(bio)))
    : bio;

  return (
      <div className="c-AboutMeSection pv2 ph3 bt b--black-10">
        <div className="f7 f6-ns lh-copy">
          {
            htmlString
              ? <HtmlFromString htmlString={htmlString} />
              : 'About Me description not added yet.'
          }
        </div>
      </div>
  );
};

export default AboutMeSection;
