import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import Button from 'src/components/Shared/Button';

const HeroSection: FunctionComponent<{}> = () => {
  return (
    <div className="c-HeroSection flex items-start white">
      <section className="c-HeroTextSection mh3 mh5-ns mv6-ns">
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
        <Link href="/signup">
          <a>
            <Button
              type="button"
              className="c-GetStartedButton bn bg-cyan f5 b white mb4 mb0-ns"
            >
              GET STARTED
            </Button>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default HeroSection;
