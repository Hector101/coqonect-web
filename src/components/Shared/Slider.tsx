import React, { FunctionComponent, ReactNode } from 'react';
import Slick from 'react-slick';

type Props = {
  children: ReactNode;
  className?: string;
  numberOfSlide: number;
  autoplay?: boolean;
  dots?: boolean;
  infinite?: boolean;
};

const Slider: FunctionComponent<Props> = (props) => {

  const {
    className,
    children,
    numberOfSlide,
    autoplay,
    dots,
    infinite,
  } = props;

  const settings = {
    dots,
    autoplay,
    autoplaySpeed: 5000,
    infinite,
    speed: 500,
    slidesToShow: numberOfSlide,
    slidesToScroll: numberOfSlide,
    initialSlide: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
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
