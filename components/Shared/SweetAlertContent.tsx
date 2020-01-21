import React, { FunctionComponent } from 'react';

import Google from '../../static/svgs/Google.svg';

const SweetAlertContent: FunctionComponent<{}> = () => {
  return (
    <div className="flex flex-column items-center">
      <span className="f4">Kindly verified your E-mail</span>
      <ul className="tl">
        <li className="mb2">
          <span className="f6">Check your email to verify</span>
        </li>
        <li className="mb2">
          <span className="f6">
            Sign In with <Google className="w1 h1 mh1" /> via your email to verify.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SweetAlertContent;
