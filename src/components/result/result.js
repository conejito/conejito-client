import React, { Component } from 'react';
import './result.css';
import restaurant from './restaurant.svg';
import Conejito from '../../components/conejito/conejito';
import Map from '../../components/map/map';
import Rating from '../../components/rating/rating';

const Result = (props) => (
  <div>
    {
      props.info.type === 'answer'
      ?
        <div className="answer">
          <Conejito />
          <p>{props.info.data.response}</p>
        </div>
      :
        <div className="result">
          <p className="name">{props.info.data.name}</p>
          <Rating data={props.info.data.rating}/>
          <p className='address'>{props.info.data.address}</p>
          <Map lat={props.info.data.location.lat} lng={props.info.data.location.lng}/>
        </div>
    }
  </div>
);

export default Result;
