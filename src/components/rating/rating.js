import React from 'react';
import './rating.css';
import starFull from './starFull.svg';
import starHalf from './starHalf.svg';
import starEmpty from './starEmpty.svg';

const Rating = (props) => (
  <div className="rating">
    <span> {props.data} </span>
    {(Array(Math.floor(props.data)).fill(0)).map( (e, i) => <img key={i} src={starFull} alt="full star"/>)}
    {
      props.data > Math.floor(props.data) ?
      <img src={starHalf} alt="half star"/> : ''
    }
    {(Array(5-Math.ceil(props.data)).fill(0)).map( (e, i) => <img key={i} src={starEmpty} alt="empty star"/>)}

  </div>
);

export default Rating;
