import React from 'react';
import {Message} from './Message';

export const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  );
};


