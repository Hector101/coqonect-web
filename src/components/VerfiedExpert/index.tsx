import React, { FunctionComponent } from 'react';

import OutlinedCard from 'src/components/Card';

const VerifiedExpert: FunctionComponent<{}> = () => {
  return (
    <section className="c-VerifiedExpertSection">
      <div>
        <h3 className="tc">Meet Our Verified Experts</h3>
      </div>
      <div className="flex-ns w-100 justify-between">
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
      </div>
    </section>
  );
};

export default VerifiedExpert;
