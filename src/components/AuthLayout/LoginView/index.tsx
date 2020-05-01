import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';

// Components
import Button from 'src/components/SharedLayout/Shared/Button';
import ForgotPasswordModal from 'src/components/AuthLayout/LoginView/ForgotPasswordModal';
import LoginForm from 'src/components/AuthLayout/LoginView/LoginForm';
import { observer } from 'mobx-react-lite';

// SVG
import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  Google,
  Logo,
} = SVGS;

const LoginView: FunctionComponent<{}> = () => {
  const [ isAdminLogin, setIsAdminLogin ] = useState(false);

  const _toggleSwitch = () => {
    setIsAdminLogin(!isAdminLogin);
  };
  const _socialLogin = () => {
    window.location.href = `${process.env.API_URL}/api/v1/google`;
  };

  return (
    <div className="c-Login w-100 vh-100 flex flex-column justify-center-ns justify-start items-center">
      <ForgotPasswordModal />
      <div className="shadow-1-m shadow-1-l w-100 w-50-m w-40-l mt1 mw6">
        <div className="tc pv2">
          <Link href="/">
            <a>
              <Logo className="w3 h3 c-Logo"/>
            </a>
            </Link>
        </div>
        <div className="mh4 mb4 mt2">
          <div className="ba b--black-10 br2 pa2">
            <Button
              className="pa3 input-reset ba b--black-20 bg-transparent pointer f6 w-100 flex items-center"
              onClick={_socialLogin}
              type="button"
              disabled={isAdminLogin}
            >
              <Google className="w1 h1 mr4" />
              <span className="f6">Sign In with Google</span>
            </Button>
            <h4 className="lh-title tc">OR</h4>
            <LoginForm toggleSwitch={_toggleSwitch} isAdminLogin={isAdminLogin} />
          </div>
          <div className="flex justify-between items-center mv3 link f6">
            <span aria-labelledby="Don't have an account?">Don't have an account?</span>
            <Link href="/auth/signup">
              <a className="blue link pointer">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginView);
