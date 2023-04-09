import React from 'react';
import ReactDOM from 'react-dom';
import {ChatRoom} from "./components/ChatRoom"

export class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [
        { id: 1, name: "User A", avatar: "https://via.placeholder.com/50x50", status: "online" },
        { id: 2, name: "User B", avatar: "https://via.placeholder.com/50x50", status: "offline" },
        { id: 3, name: "User C", avatar: "https://via.placeholder.com/50x50", status: "online" },
      ],
    };
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  handleMessageSubmit(text) {
    const newMessage = {
      id: Date.now(),
      sender: "User A",
      time: new Date().toLocaleTimeString(),
      text: text,
    };
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage],
    }));
  }

  render() {
    return (
      <div className="chat-app">
        <ChatRoom users={this.state.users} messages={this.state.messages} onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<ChatApp />, document.getElementById("root"));

