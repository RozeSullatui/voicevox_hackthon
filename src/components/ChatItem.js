export function ChatItem({ user }) {
  return (
    <div className="chat-item">
      <img className="chat-item-avatar" src={user.avatar} alt={user.name} />
      <div className="chat-item-info">
        <div className="chat-item-name">{user.name}</div>
        <div className="chat-item-status">{user.status}</div>
      </div>
    </div>
  );
}
