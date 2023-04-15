import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { MessageList } from './MessageList';
import { ChatInput } from './Input';
import '../style/styles.css';

export const HomePage = () => {
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