import React from 'react'
import {Link} from 'react-router-dom';
import '../style/styles.css';
import myImage from '../images/homeImg.jpg'

export function WelcomePage() {
  return (
    <div>
      <div className="link">
        <Link to="/home">HomePageへGO‼</Link>
        </div>
          <div className="icon">
          <img src={myImage} alt='' width="50"/>
        </div>
    </div>
  )
}

