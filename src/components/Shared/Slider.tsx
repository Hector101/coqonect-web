import React, { FunctionComponent, ReactNode } from 'react';
import Slick from 'react-slick';

type Props = {
  children: ReactNode;
  className?: string;
};

const Slider: FunctionComponent<Props> = (props) => {

  const {
    className,
    children,
  } = props;

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <Slick {...settings} >
        {children}
      </Slick>
    </div>
  );
};

export default Slider;
