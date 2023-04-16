import React from 'react';
import '../style/sidebar.css';

export function SideItem({ image, name, speaker_id, active, handleClick }) {
  return (
    <div className={`sidebar-row${active ? ' active' : ''}`} onClick={handleClick}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
}
