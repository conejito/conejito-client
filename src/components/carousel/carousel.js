import React from 'react';
import './carousel.css';
import Slider from 'react-slick';
import Conejito from '../conejito/conejito'

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };
  return (
    <div className='carousel'>
    <Slider {...settings}>
      { props.slides && props.slides.map( (slide, i) => (
        <div>
          { slide.conejito ? <Conejito key={i} type={slide.conejito} /> : <img key={i} src={slide.img} alt="conejito" /> }
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>
      )) }
    </Slider>
    </div>
  );
}

export default Carousel;
