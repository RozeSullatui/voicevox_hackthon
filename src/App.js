import React, { useState } from 'react';
import {MessageList} from './components/MessageList';
import {Sidebar} from './components/Sidebar.js';
import {ChatInput} from './components/Input';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
    <Sidebar/>
        <MessageList messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
  );
}

export default App;





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
