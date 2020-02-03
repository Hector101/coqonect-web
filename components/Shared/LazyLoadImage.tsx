import React, { FunctionComponent } from 'react';

type Props = {
  className: string;
  srcName: string;
  fallbackIconName: string;
  alt?: string;
};

const LazyLoadImage: FunctionComponent<Props> = ({ srcName, fallbackIconName, ...restProps }) => {
  const src = srcName ?? `/static/svgs/${fallbackIconName}.svg`;
  return (
    <img src={src} {...restProps}/>
  );
};

export default LazyLoadImage;
