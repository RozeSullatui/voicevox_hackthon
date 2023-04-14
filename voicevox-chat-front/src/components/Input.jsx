import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SpeechRecBtn } from './SpeechRecBtn';

import '../styles.css'

export const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText("");
  };

  
  const handleRecognitionEnd = (recognizedText) => {
    setText(recognizedText);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type a message"
      />
      <SpeechRecBtn onRecognitionEnd={handleRecognitionEnd}/>
      <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
    </form>
  );
};
