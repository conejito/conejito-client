import React, { Component } from 'react';
import './conejito.css';
import conejito from './conejito.png';
import conejitoBag from './conejitoBag.png';
import conejitoSad from './conejitoSad.png';
import conejitoBeer from './conejitoBeer.png';
import conejitoEat from './conejitoEat.png';
import conejitoFootball from './conejitoFootball.png';
import conejitoFrance from './conejitoFrance.png';
import conejitoPopcorn from './conejitoPopcorn.png';
import conejitoLoading from './conejitoLoading.gif';


class Conejito extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
    this.getImage();
  }

  getImage() {
    this.img = conejito;

    const map = {
      "bag": conejitoBag,
      "sad": conejitoSad,
      "beer": conejitoBeer,
      "eat": conejitoEat,
      "football": conejitoFootball,
      "france": conejitoFrance,
      "popcorn": conejitoPopcorn,
      "loading": conejitoLoading
    }

    if (this.props.type in map) {
      this.img = map[this.props.type]
    }
  }

  render() {
    return (
      <div className='conejito-wrapper'>
        <img src={this.img} className='conejito' />
      </div>
    );
  }
}

export default Conejito;
