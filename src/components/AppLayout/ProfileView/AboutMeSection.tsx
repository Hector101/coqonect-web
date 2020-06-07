import React, { FunctionComponent, SyntheticEvent } from 'react';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { useObserver } from 'mobx-react-lite';
import classnames from 'classnames';

import HtmlFromString from 'src/components/SharedLayout/Shared/HtmlFromString';
import CustomDialog from 'src/components/SharedLayout/Shared/CustomDialog';
import SVGS from 'src/components/SharedLayout/Shared/SVGS';

import { useStore } from 'src/store';

type Props = {
  bio: string | null;
};

const AboutMeSection: FunctionComponent<Props> = ({ bio }) => {
  const { uiStore } = useStore();

  const htmlString = bio
    ? stateToHTML(convertFromRaw(JSON.parse(bio)))
    : bio;

  const className = classnames('f7 f6-ns lh-copy', {
    'c-about-me-continer': !!(htmlString),
  });

  const _viewMore = (e: SyntheticEvent<HTMLSpanElement>) => {
    uiStore.openDialog(e.currentTarget.id);
  };

  return useObserver(() => (
    <>
      <CustomDialog
        title="More About Me"
        dialogId="about-me-dialog"
        darkenHeaderBackground={true}
      >
        <HtmlFromString htmlString={htmlString} />
      </CustomDialog>
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
            <span id="about-me-dialog" onClick={_viewMore} className="inline-flex items-center f6 primary-blue pointer">
              <SVGS.SeeMore className="w1 h1 fill-primary-blue mr2" />
              More
            </span>
          )
        }
      </div>
    </>
  ));
};

export default AboutMeSection;
