

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/Input';
import './styles.css';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { text };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      <Sidebar />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};



// function App() {
  
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     setMessages([...messages, message]);
//   };

//   return (
//     <div className="chat-screen">
//       <Sidebar />
//       <MessageList messages={messages} />
//       <ChatInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div className="App">test

//     <p>これはテストメッセージ</p>
//     <p>issueテストです</p>
//     </div>
//   );
// }

// export default App;
