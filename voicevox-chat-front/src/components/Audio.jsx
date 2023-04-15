import React, { useRef, useState, useEffect } from 'react';
import '../style/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';

export const AudioButton = ({}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();
  const prevIsPlaying = useRef();

  const audioPlay = () => {
    setIsPlaying(prevIsPlaying.current);
  };

  useEffect(() => {
    var audioContext = new AudioContext();
    const audioElement = audioRef.current;

    if (isPlaying) {
      var source = audioContext.createMediaElementSource(audioElement);
      source.connect(audioContext.destination);
      audioElement.play();
    } else {
      audioElement.pause();
    }

    return () => {
      audioContext.close();
      prevIsPlaying.current = !isPlaying
    };
  }, []);

  return (
    <React.Fragment>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + '/error.wav'} controls={isPlaying}/>
      <button onClick={audioPlay}>
          <FontAwesomeIcon icon={faCirclePlay} className="play-icon"/>
      </button>
    </React.Fragment>
  )
}