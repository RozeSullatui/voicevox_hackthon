import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const SpeechRecBtn = ({ onRecognitionEnd }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [rectext, setRecText] = useState("");

  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.continuous = false; // 連続するかどうか
  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsRecording(true);
  };

  recognition.onend = () => {
    setIsRecording(false);
    onRecognitionEnd(rectext);
  };  
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setRecText(transcript);
  };

  const handleClick = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <button onClick={handleClick}>
      {isRecording ? <FontAwesomeIcon icon={faMicrophone} beatFade /> : <FontAwesomeIcon icon={faMicrophone} />}
    </button>
  );
};