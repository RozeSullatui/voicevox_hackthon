import React from 'react';
import '../style/sidebar.css';


export const SideItem = ({image, name}) => {
    return (
        <div className="sidebar-row" >
        <img src={image} alt=''/>
        <h4>{name}</h4>
        </div>    
    );
}
