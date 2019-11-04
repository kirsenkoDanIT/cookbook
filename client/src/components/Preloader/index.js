import React from 'react';
import './index.css';

export const Preloader = () => {
  return (
    <div className="wrapper">
      <div className="dot-wrapper">
        <span className='spinner-dot' id="p1"></span>
      </div>
      <div className="dot-wrapper">
        <span className='spinner-dot' id="p2"></span>
      </div>
      <div className="dot-wrapper">
        <span className='spinner-dot' id="p3"></span>
      </div>
    </div>
  );
};