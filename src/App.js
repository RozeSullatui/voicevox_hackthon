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
      const newMessage = { text };
      setMessages([...messages, newMessage]);

      setTimeout(() => {
        const autoReply = { text: 'Hello world!' };
        setMessages(prevMessages => [...prevMessages, autoReply]);
        setShowAutoReply(true);
      }, 1000);
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <MessageList messages={messages} showAutoReply={showAutoReply} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};



// import React, { useState } from 'react';
// import { Sidebar } from './components/Sidebar';
// import { MessageList } from './components/MessageList';
// import { ChatInput } from './components/Input';
// import './styles.css';

// export const App = () => {
//   const [textMessages, setTextMessages] = useState([]);
//   const [showAutoReply, setShowAutoReply] = useState(false);

//   const handleSendMessage = (text) => {
//     if (text !== '') {
//       setTextMessages([...textMessages, text]);
//       setShowAutoReply(true);

//       setTimeout(() => {
//         const autoReply = 'hello world';
//         setTextMessages([...textMessages, autoReply]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="app">
//       <Sidebar />
//       <MessageList messages={{ showAutoReply }} textMessages={textMessages} />
//       <ChatInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// };









// export const App = () => {
//   const [messages, setMessages] = useState([]);
//   const [showAutoReply, setShowAutoReply] = useState(false); // 初期値をfalseに設定


// const handleSendMessage = (text) => {
//     if (text !== '') {
//       const newMessage = {
//         id: messages.length + 1, // IDを追加
//         text,
//         timestamp: new Date().getTime() // 送信時刻を追加
//       };
//       setMessages([...messages, newMessage]);

//       setTimeout(() => {
//         const autoReply = {
//           id: messages.length + 2, // IDを追加
//           text: 'hello world',
//           timestamp: new Date().getTime() // 送信時刻を追加
//         };
//         setMessages([...messages, autoReply]);
//         setShowAutoReply(true);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="app">
//       <Sidebar />
//       <MessageList messages={messages} showAutoReply={showAutoReply}/>
//       <ChatInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// };



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
