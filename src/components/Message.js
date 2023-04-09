export function ChatMessage({ message }) {
  return (
    <div className="chat-message">
      <div className="chat-message-header">
        <span className="chat-message-sender">{message.sender}</span>
        <span className="chat-message-time">{message.time}</span>
      </div>
      <div className="chat-message-text">{message.text}</div>
    </div>
  );
}

