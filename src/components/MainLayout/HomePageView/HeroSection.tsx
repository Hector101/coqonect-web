import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react-lite';

import Button from 'src/components/SharedLayout/Shared/Button';

import { useStore } from 'src/store';

const HeroSection: FunctionComponent<{}> = () => {
  const { userStore } = useStore();

  return (
    <div className="c-HeroSection flex items-start white">
      <section className="c-HeroTextSection mh4 mv6-ns">
        <Typography
          variant="h3"
          gutterBottom={true}
          className="c-HeroTitle"
        >
          Connect with experts to become an expert
        </Typography>
        <Typography variant="subtitle1" className="c-SubHeroTitle">
          CoQonect connects you to verified
           experts to help you become an expert on various skills.
        </Typography>
        <Link href={userStore.authenticated ? '/app/dashboard' : '/auth/signup'}>
          <a>
            <Button
              type="button"
              className="c-GetStartedButton bn bg-cyan f5 b white mb4 mb0-ns br1"
            >
              GET STARTED
            </Button>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default observer(HeroSection);
