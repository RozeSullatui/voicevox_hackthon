import React from 'react';
import '../styles.css'

export const Message = ({ message }) => {
  const { text, isUser } = message;
  return (
    <div className={` ${isUser ? 'message-right' : 'message-left'}`}>
      <div className="message-inner">
        {text}
      </div>
    </div>
  );
};
