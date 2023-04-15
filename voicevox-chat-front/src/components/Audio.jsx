import React, { useRef, useState, useEffect } from 'react';
import '../style/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';

export const AudioButton = ({_}) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
  
    const audioClick = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };
  
    useEffect(() => {
      const audioContext = new AudioContext();
      const audioElement = audioRef.current;
  
      if (isPlaying) {
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(audioContext.destination);
        audioElement.play();
      } else {
        audioElement.pause();
      }
  
      return () => {
        audioContext.close();
      };
    }, [isPlaying]);

    return (
        <button onClick={audioClick}>
            <audio ref={audioRef} src={process.env.PUBLIC_URL + '/answer.wav'} />
            <FontAwesomeIcon icon={faCirclePlay} className="play-icon"/>
        </button>
    )
}