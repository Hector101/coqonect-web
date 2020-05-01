import { useRouter } from 'next/router';
import React from 'react';
import { NextPageContext } from 'next';

import SVGS from 'src/components/SharedLayout/Shared/SVGS';

const {
  PageNotFountIcon,
  Cloud,
  LeftArrow,
  Home,
} = SVGS;

import Plain from 'src/components/SharedLayout/Containers/Plain';
import Button from 'src/components/SharedLayout/Shared/Button';

type Props = {
  statusCode: number;
};

function Error({ statusCode }: Props) {
  const router = useRouter();

  const _goBack = () => {
    router.back();
  };

  const _goToHome = () => {
    router.push('/');
  };

  return (
    <Plain title={statusCode && statusCode >= 500 ? 'Temporary Server Error' : 'Page not Found'}>
      <div className="w-100 vh-100 flex flex-column justify-center items-center">
        {
          statusCode && statusCode >= 500
            ? (
              <>
                <Cloud className="w4 h4" />
                <h3>Temporary Server Error</h3>
              </>
            )
            : (
                <>
                  <PageNotFountIcon className="w4 h4" />
                  <h3>Page Not Found</h3>
                </>
              )
        }
        <div className="mt5 w-100 flex justify-center">
          <Button
            className="pa2 ba b--black-20 flex items-center bg-white f6"
            type="button"
            onClick={_goBack}
          >
            <LeftArrow className="w1 h1 mr2"/>
            Go Back
          </Button>
          <Button
            className="pa2 ml3 ba b--black-20 flex items-center bg-white f6"
            type="button"
            onClick={_goToHome}
          >
            <Home className="w1 h1 mr2"/>
            Go to Home
          </Button>
        </div>
      </div>
    </Plain>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
