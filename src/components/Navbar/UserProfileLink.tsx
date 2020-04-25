import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import ContentLoader from 'react-content-loader';

import ImageAvatar from 'src/components/Shared/ImageAvatar';

import { TQuery } from 'src/apolloTypes';

type Props = {
  userData: TQuery;
  loading: boolean;
};

const UserProfileLink: FunctionComponent<Props> = ({ loading, userData }) => {

  if (loading || !userData) {
    return (
      <ContentLoader
        height={24}
        width={92.73}
        backgroundColor="#a5a2a2"
        speed={1}
      >
        <circle cx="20" cy="12" r="12" />
        <rect height="10" rx="1" ry="1" width="60" x="35" y="7" />
      </ContentLoader>
    );
  }

  const { profile } = userData.client.authenticatedUser;

  return (
    <Link href="/dashboard/profile">
      <a className="inline-flex justify-center items-center pointer link">
        <ImageAvatar
          src={profile.imageUrl}
        />
        <span className="f7 f6-ns ml2">{profile.fullName}</span>
      </a>
    </Link>
  );
};

export default UserProfileLink;
