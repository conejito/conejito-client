import React from 'react';
import './button.css';

/**
 * Simple button component
 */

const Button = (props) => (
  <button className='cta' onClick={props.onClick}>
    {props.text}
  </button>
)

export default Button;
