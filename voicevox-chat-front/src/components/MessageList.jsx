import React, { useState } from 'react';
import { Message } from './Message';
import '../style/styles.css';

export const MessageList = ({ messages }) => {
  const [textMessages] = useState([]);


  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
        />
      ))}
      {textMessages.map((message, index) => (
        <div
          key={index}
        >
          <Message
            message={{ text: message.text, isUser: message.isUser }}
          />
        </div>
      ))}
    </div>
  );
};