import React from 'react';
import '../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Message = ({ message }) => {
  const { text, isUser } = message;
  return (
    
    <div className={` ${isUser ? 'message-right' : 'message-left'}`}>
              {isUser ? (
        <FontAwesomeIcon icon={faDownload} className="download-icon"  />
      ) : null}
      <div className="message-inner">
        {text}
      </div>
     {isUser ? (
       null
      ) :  <FontAwesomeIcon icon={faDownload} className="download-icon2"  />}
    </div>
  );
};
