import React, { FunctionComponent } from 'react';

const JoinUs: FunctionComponent<{}> = () => {
  return (
      <section className="c-JoinUsSection flex-ns flex-row-reverse justify-around-ns">
        <div className="">
          <h3 className="">Why You Should</h3>
          <h4>Join Us</h4>
        </div>
          <div className="w-50-ns c-JoinUsImageContainer">
            <img src="./images/blurred.png" className="h-100-ns w-100-ns"/>
          </div>
      </section>
  );
};

export default JoinUs;
