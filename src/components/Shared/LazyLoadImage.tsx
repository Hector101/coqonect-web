import React, { FunctionComponent } from 'react';

type Props = {
  className: string;
  src: string | null;
  fallbackIconName?: string;
  alt?: string;
};

const LazyLoadImage: FunctionComponent<Props> = ({ src, fallbackIconName = 'ProfilePic', ...restProps }) => {
  const srcName = src ?? `/svgs/${fallbackIconName}.svg`;
  return (
    <img src={srcName} {...restProps}/>
  );
};

export default LazyLoadImage;
