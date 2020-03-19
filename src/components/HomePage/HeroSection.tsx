import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import Button from 'src/components/Shared/Button';

const HeroSection: FunctionComponent<{}> = () => {
  return (
    <div className="c-HeroSection flex items-start white">
      <section className="c-HeroTextSection mh2 mh5-ns mv6-ns">
        <h2 className="c-HeroTitle ma0">Connect with experts to become an expert</h2>
        <div className="c-HeroSubtitle">
          CoQonect connects you to verified
           experts to help you become an expert on various skills.
        </div>
        <Link href="/signup">
          <a>
            <Button
              type="button"
              className="c-GetStartedButton bn bg-primary-blue f5 b white"
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
