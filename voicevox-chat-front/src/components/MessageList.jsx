import React, { useState } from 'react';
import { Message } from './Message';
import '../styles.css';

export const MessageList = ({ messages }) => {
  const [textMessages, setTextMessages] = useState([]);

  const handleSendMessage = (text) => {
    if (text !== '') {
      const newMessage = { text, isUser: true }; // ユーザーが送信したメッセージにisUserプロパティを追加
      setTextMessages((prevMessages) => [...prevMessages, newMessage]);

      setTimeout(() => {
        const autoReply = { text: 'Hello world!', isUser: false }; // 自動返信メッセージにisUserプロパティを追加
        setTextMessages((prevMessages) => [...prevMessages, autoReply]);
      }, 1000);
    }
  };

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
          className={message.isUser ? 'right' : 'left'} // isUserプロパティでクラス名を切り替える
        />
      ))}
      {textMessages.map((message, index) => (
        <div
          key={index}
          className={`text-message ${
            message.isUser ? 'right' : 'left' // isUserプロパティでクラス名を切り替える
          }`}
        >
          <Message
            message={{ text: message.text }}
            className={message.isUser ? 'right' : 'left'} // isUserプロパティでクラス名を切り替える
          />
        </div>
      ))}
    </div>
  );
};
