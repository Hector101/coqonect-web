import React, { FunctionComponent } from 'react';

type Props = {
  className: string;
  srcName: string | null;
  fallbackIconName: string;
  alt?: string;
};

const LazyLoadImage: FunctionComponent<Props> = ({ srcName, fallbackIconName, ...restProps }) => {
  const src = srcName ?? `/svgs/${fallbackIconName}.svg`;
  return (
    <img src={src} {...restProps}/>
  );
};

export default LazyLoadImage;
