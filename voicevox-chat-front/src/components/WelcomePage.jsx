import React from 'react';
import { Link } from 'react-router-dom';
import '../style/styles.css';
import myImage from '../images/homeImg.jpg';

export function WelcomePage() {
  return (
    <div className="container" style={{ backgroundImage: `url(${myImage})` }}>
      <div className="logo">
        <h1>二次元への扉</h1>
      </div>
      <div className="links-container">
        <div className="links">
          <Link to="/home">入場する</Link>
          <Link to="/about">このサイトについて</Link>
        </div>
      </div>
      <div className="door">
        <Link to="/home">
        </Link>
      </div>
    </div>
  );
}