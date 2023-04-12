import React, { useState } from 'react';
import { Message } from './Message';
import '../styles.css';

export const MessageList = ({ messages, setMessages }) => {
  const [textMessages, setTextMessages] = useState([]);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text, isUser: true };
      setTextMessages((prevMessages) => [...prevMessages, newMessage]);

      setTimeout(() => {
        const autoReply = { text: 'Hello world!', isUser: false };
        setMessages((prevMessages) => [...prevMessages, autoReply]);
      }, 1000);
    }
  };

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