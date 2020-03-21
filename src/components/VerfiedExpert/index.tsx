import React, { FunctionComponent } from 'react';

import Card from '@material-ui/core/Card'

const VerifiedExpert: FunctionComponent<{}> = () => {
  return (
    <section className="c-VerifiedExpertSection">
      <div>
        <h3 className="tc">Meet Our Verified Experts</h3>
      </div>
      <div className="flex-ns w-100 justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default VerifiedExpert;
