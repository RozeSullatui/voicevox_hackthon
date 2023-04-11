import React from 'react';
import '../styles.css'

export const Message = ({ message, className }) => {
  const { text, isUser } = message;
  return (
    <div className={`message ${className} ${isUser ? 'right' : 'left'}`}>
      <div>{text}</div>
    </div>
  );
};