import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import Button from 'src/components/SharedLayout/Shared/Button';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Prohibition,
} = SVGS;

const UnauthorizedView: FunctionComponent<{}> = () => {
  return (
    <div className="w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <div className="w-100 w-50-m w-40-l mt1 tc pv4 ph2">
        <div className="pv2">
          <Prohibition className="w3 h3"/>
        </div>
        <h3>No authorization found.</h3>
        <p className="f6">You don't have the right permission to perform this operation</p>
        <Link href="/auth/login">
          <a className="link"><Button type="button" primaryColor={true} filled={true} className="pv2 ph4 mt2 f6">
            Return to Login</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedView;
