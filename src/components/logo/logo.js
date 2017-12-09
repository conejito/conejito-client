import React, { Component } from 'react';
import './logo.css';
import logo from './logo.png';


const Logo = (props) => (
  <div className={props.variant + ' logo-wrapper'}>
    <img src={logo} className='logo' />
  </div>
);

export default Logo;
