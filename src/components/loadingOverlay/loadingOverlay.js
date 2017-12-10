import React from 'react';
import './loadingOverlay.css';
import Conejito from '../../components/conejito/conejito';

const LoadingOverlay = () => (
  <div className="loadingOverlay">
    <Conejito type="loading" />
  </div>
)

export default LoadingOverlay;
