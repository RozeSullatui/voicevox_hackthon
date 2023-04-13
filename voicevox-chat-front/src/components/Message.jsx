import React from 'react';
import '../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Message = ({ message }) => {
  const { text, isUser } = message;
  return (
    <div className={` ${isUser ? 'message-right' : 'message-left'}`}>
      <div className="message-inner">
        {text}
      </div>
      <FontAwesomeIcon icon={faDownload} className="download-icon" />
    </div>
  );
};
