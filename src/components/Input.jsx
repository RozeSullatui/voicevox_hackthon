// import React, { useState } from 'react';
// import '../styles.css'

import React, { useState } from 'react';
import '../styles.css';

export const ChatInput = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');

  const handleTextChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageText) {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  return (
        <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message"
        value={messageText}
      onChange={handleTextChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};



// export const ChatInput = ({ onSendMessage }) => {
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && message.trim() !== '') {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   const handleClick = () => {
//     if (message.trim() !== '') {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="chat-input">
//       <input
//         type="text"
//         placeholder="Type your message"
//         value={message}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={handleClick}>Send</button>
//     </div>
//   );
// };


// export function ChatInput(props) {
//   const [message, setMessage] = useState('');

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // props.onSendMessageが定義されていることを確認して、それを呼び出す
//     if (props.onSendMessage) {
//       props.onSendMessage(message);
//     }
//     setMessage(''); // メッセージの入力欄を空にする
//   };

//   return (
//     <form onSubmit={handleSubmit} className="chat-input">
//       <input
//         type="text"
//         placeholder="Type a message..."
//         value={message}
//         onChange={handleChange}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


