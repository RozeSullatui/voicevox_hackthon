import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/Input';
import './style/styles.css';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [showAutoReply, setShowAutoReply] = useState(false);
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=> {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  },[]);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text, isUser: true };
      setMessages([...messages, newMessage]);

        const autoReply = { text: initialData.result, isUser: false };
        setMessages(prevMessages => [...prevMessages, autoReply]);
        setShowAutoReply(true);
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