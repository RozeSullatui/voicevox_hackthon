import React, { useRef, useState, useEffect } from 'react';
import '../style/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new AudioContext();
  }, []);

  const handleAudioPlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const audioContext = audioContextRef.current;

    if (audioElement && audioContext) {
      if (isPlaying) {
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(audioContext.destination);
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + '/error.wav'} />
      <button onClick={handleAudioPlay}>
        <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
      </button>
    </>
  );
};
