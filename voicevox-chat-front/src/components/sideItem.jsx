import React from 'react';
import '../style/sidebar.css';

import myImage from '../images/Icon.png';

export const SideItem = ({name}) => {
    return (
        <div className="sidebar-row" >
        <img src={myImage} alt=''/>
        <h4>{name}</h4>
        </div>    
    );
}
