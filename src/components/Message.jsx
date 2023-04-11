
import React from 'react';
import '../styles.css'

 export const Message = ({ message }) => {
  return (
    <div className="message">
      <div>{message.text}</div>
    </div>
  );
  
};






// import React from 'react';
// import '../styles.css'


// export function MessageList() {
//   const messages = [
//     { id: 1, sender: 'John', text: 'Hello' },
//     { id: 2, sender: 'Jane', text: 'Hi' },
//     { id: 3, sender: 'John', text: 'How are you?' },
//     { id: 4, sender: 'Jane', text: 'I\'m good. Thanks for asking!' },
//   ];

//   return (
//     <div className="message-list">
//       {messages.map((message) => (
//         <div key={message.id} className="message">
//           <div className="message-sender">{message.sender}:</div>
//           <div className="message-text">{message.text}</div>
//         </div>
//       ))}

//     </div>
//   );
// }


