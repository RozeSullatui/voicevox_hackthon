import {ChatItem} from "./ChatItem";
import {ChatBox} from "./ChatBox";
import {ChatMessage} from "./Message"

export function ChatRoom({ users, messages, onMessageSubmit }) {
  return (
    <div className="chat-room">
      <div className="chat-room-users">
        {users.map(user => (
          <ChatItem key={user.id} user={user} />
        ))}
      </div>
      <div className="chat-room-messages">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="chat-room-input">
        <ChatBox onSubmit={onMessageSubmit} />
      </div>
    </div>
  );
}

