import React, { useState } from 'react';
import { Message } from './Message';
import '../styles.css';

export const MessageList = ({ messages }) => {
  const [textMessages, setTextMessages] = useState([]);
  const [showAutoReply, setShowAutoReply] = useState(false);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text };
      setTextMessages((prevMessages) => [...prevMessages, newMessage]);

      setTimeout(() => {
        const autoReply = { text: 'Hello world!' };
        setShowAutoReply(true);
        setTextMessages((prevMessages) => [...prevMessages, autoReply]);
        setTimeout(() => {
          setShowAutoReply(false);
        }, 1000);
      }, 1000);
    }
  };

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} className="right" />
      ))}
      {showAutoReply && (
        <Message message={{ text: "Hello world!" }} className="left" />
      )}
      {textMessages.map((message, index) => (
        <div key={index} className={`text-message ${index % 2 === 0 ? 'right' : 'left'}`}>
          <Message message={{ text: message }} className={index % 2 === 0 ? 'right' : 'left'} />
        </div>
      ))}
    </div>
  );
};