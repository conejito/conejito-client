import React, { Component } from 'react';
import './carousel.css';
import Slider from 'react-slick';
import Conejito from '../conejito/conejito'

class Carousel extends Component {
  render() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='carousel'>
    <Slider {...settings}>
      <div>
        <Conejito type='bag' />
        <h3>Często podróżujesz?</h3>
        <p>To zupełnie jak nasz Conejito. Przybył on z Meksyku, by pomóc innym turystom w poznaniu nowego miejsca.</p>
      </div>
      <div>
        <Conejito type='eat' />
        <h3>Nie wiesz gdzie zjeść?</h3>
        <p>Po prostu spytaj! Zastanawiałeś się gdzie jest najbliższa kawiarnia, albo do jakiej pizzerii udać się dzisiaj z rodziną? Teraz możesz w łatwy sposób poznać odpowiedź</p>
      </div>
      <div>
        <Conejito type='popcorn' />
        <h3>Szukasz rozrywki na wieczór?</h3>
        <p>Kino, galeria sztuki, a może spa? Wybierz co chcesz i spytaj Conejito, a on przedstawi Ci możliwości, z nim na pewno coś znajdziesz :)</p>
      </div>
    </Slider>
    </div>
  );
}
}

export default Carousel;
