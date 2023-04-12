import React from 'react';
import '../styles.css'

export const Message = ({ message, className }) => {
  const { text, isUser } = message;
  return (
    <div className={`message ${className}`}>
      <div className={`message-inner ${isUser ? 'message-right' : 'message-left'}`}>
        {text}
      </div>
    </div>
  );
};
