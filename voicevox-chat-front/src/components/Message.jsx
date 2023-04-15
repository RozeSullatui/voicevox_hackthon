import React from 'react';
import '../style/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCirclePlay} from '@fortawesome/free-solid-svg-icons';

import myImage from '../images/Icon.png';

export const Message = ({ message }) => {
  const { text, isUser } = message;
  return (
    <div className={` ${isUser ? 'message-right' : 'message-left'}`}>
      {!isUser && (
        <div className="user-icon">
          <img src={myImage} alt=''/>
          <FontAwesomeIcon icon={faCirclePlay} className="play-icon"/>
        </div>
      )}
      {isUser ? (<FontAwesomeIcon icon={faDownload} className="download-icon"/>) : null}
      <div className="message-inner">
        {text}
      </div>
     {isUser ? (null) : <FontAwesomeIcon icon={faDownload} className="download-icon2"/>}
    </div>
  );
};
