import React from 'react';


export class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="chat-form">
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type your message here" className="chat-input"/>
        <button type="submit" className="chat-submit">Send</button>
      </form>
    );
  }
}

