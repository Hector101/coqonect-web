import React, { FunctionComponent } from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import classnames from 'classnames';

import HtmlFromString from 'src/components/Shared/HtmlFromString';

import { SVGS } from 'src/components/Shared/SVGS';

type Props = {
  bio: string | null;
};

const AboutMeSection: FunctionComponent<Props> = ({ bio }) => {
  const htmlString = bio
    ? stateToHTML(convertFromRaw(JSON.parse(bio)))
    : bio;

  const className = classnames('f7 f6-ns lh-copy', {
    'c-about-me-continer': !!(htmlString),
  });

  return (
    <div className="c-AboutMeSection pv2 ph3 bt b--black-10 c-about-me-continer">
      <div className={className}>
        {
          htmlString
            ? <HtmlFromString htmlString={htmlString} />
            : <span className="black-50">About Me description not added yet.</span>
        }
      </div>
      {
        htmlString && (
          <span className="flex items-center f6 primary-blue">
            <SVGS.SeeMore className="w1 h1 fill-primary-blue mr2" />
            More
          </span>
        )
      }
    </div>
  );
};

export default AboutMeSection;
