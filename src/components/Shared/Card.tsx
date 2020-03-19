import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type Props = {
  withWidth?: boolean;
  children: React.ReactElement[];
};

const Card: FunctionComponent<Props> = ({withWidth, children}) => {
  const mainClassNames = classnames('c-cardContainer tc w-100 w-30-ns', {
    'w-100-ns': withWidth,
  });

  return (
    <div className={mainClassNames}>
      {children}
    </div>
  );
};

export default Card;
