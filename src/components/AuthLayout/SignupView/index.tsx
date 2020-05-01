import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

// components
import Button from 'src/components/SharedLayout/Shared/Button';
import SignupForm from 'src/components/AuthLayout/SignupView/SignupForm';

// SVG
import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Google,
  Logo,
} = SVGS;


const SignupView: FunctionComponent<{}> = () => {
  const _socialSignup = () => {
    window.location.href = `${process.env.API_URL}/api/v1/google`;
  };

  return (
    <div className="c-Signup w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <div className="shadow-1-m shadow-1-l w-100 w-50-m w-40-l mt1 mw6">
        <div className="tc pv2">
          <Link href="/">
            <a className="pointer">
              <Logo className="w3 h3 c-Logo"/>
            </a>
          </Link>
        </div>
        <div className="mh4 mb4 mt2">
          <div className="ba b--black-10 br2 pa2">
            <Button
              className="pa3 input-reset ba b--black-20 bg-transparent pointer f6 w-100 flex items-center"
              onClick={_socialSignup}
              type="button"
            >
              <Google className="w1 h1 mr4" />
              <span className="f6">Sign up with Google</span>
            </Button>
            <h4 className="lh-title tc">OR</h4>
            <SignupForm />
          </div>
          <div className="flex justify-between items-center mv3 link f6">
            <span>Already have an account?</span>
            <Link href="/auth/login">
              <a className="blue link pointer">Login</a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default observer(SignupView);
