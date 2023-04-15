import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MessageList } from './MessageList';
import { ChatInput } from './Input';
import '../style/styles.css';

export const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [showAutoReply, setShowAutoReply] = useState(false);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text, isUser: true };
      setMessages([...messages, newMessage]);

      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post_text: text })
      })
      .then(response => response.json())
      .then(data => {
        const autoReply = { text: data.result, isUser: false };
        setMessages(prevMessages => [...prevMessages, autoReply]);
        setShowAutoReply(true);
      })
      .catch(error => console.error(error));
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <MessageList messages={messages} setMessages={setMessages} showAutoReply={showAutoReply} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};