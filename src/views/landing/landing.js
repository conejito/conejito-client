import React, { Component } from 'react';
import './landing.css';
import Button from '../../components/button/button';
import Logo from '../../components/logo/logo';
import Carousel from '../../components/carousel/carousel';


const Landing = (props) => (
  <div className='landing'>
    <Logo variant='small' />
    <Carousel />
    {/* <Button setVisited={props.setVisited} /> */}
    <h1>Premiera już wkrótce...</h1>
    <p className='cookie-info'>Nasza strona wykorzystuje mechanizm cookies.</p>
  </div>
);

export default Landing;
