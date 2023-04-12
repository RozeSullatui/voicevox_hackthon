import React from 'react';
import '../styles.css'

export const Message = ({ message }) => {
  const { text, isUser } = message;
  const className = isUser ? 'right' : 'left';
  return (
    <div className={`message ${className}`}>
      <div>{text}</div>
    </div>
  );
};
