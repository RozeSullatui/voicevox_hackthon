import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import '../style/styles.css';

export const MessageList = ({ messages, setMessages, showAutoReply }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {showAutoReply && (
        <div className="auto-reply-message"></div>
      )}
      <div ref={messageEndRef} />
    </div>
  );
};
