import React, { FunctionComponent } from 'react';

// SVG
import CheckMark from '../../../public/svgs/CheckMark.svg';


type Props = {
  message: string;
};

const SuccessMessage: FunctionComponent<Props> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="w-100 w-50-m w-40-l pv2 ph4 tc ba b--green flex items-center justify-start">
      <CheckMark className="w2 h2 fill-green mr2"/>
      <span className="f6">{message}</span>
    </div>
  );
};

export default SuccessMessage;
