import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/Input';
import './styles.css';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [showAutoReply, setShowAutoReply] = useState(false);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text, isUser: true };
      setMessages([...messages, newMessage]);

      setTimeout(() => {
        const autoReply = { text: 'Hello world!', isUser: false };
        setMessages(prevMessages => [...prevMessages, autoReply]);
        setShowAutoReply(true);
      }, 1000);
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