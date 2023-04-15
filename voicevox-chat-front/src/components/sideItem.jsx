import React from 'react';
import '../style/sidebar.css';


export const SideItem = ({image, name, speaker_id=1}) => {

    const handleChangeID = () => {

        fetch('/changeCharacter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            speaker_ID: speaker_id
        })
        })
        .then(response => response.json())
        .then(data => {
            const response = {speaker_ID: data.speaker_ID};
            console.log(data.speaker_ID);
            }
        ).catch(error => console.error(error));
    }

    return (
        <div className="sidebar-row" onClick={handleChangeID}>
        <img src={image} alt=''/>
        <h4>{name}</h4>
        </div>    
    );
}