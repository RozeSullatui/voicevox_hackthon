import React, { useState } from 'react';
import '../styles.css'

export const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};