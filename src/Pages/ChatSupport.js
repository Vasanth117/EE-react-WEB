import React, { useState } from 'react';
import './ChatSupport.css';

function ChatSupport() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! How can we help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: 'user', text: input }
    ]);
    setInput('');
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { id: msgs.length + 1, sender: 'support', text: 'Thank you for your message. Our team will reply soon.' }
      ]);
    }, 1000);
  };

  return (
    <div className="chat-support-container">
      <h1 className="chat-support-title">Chat Support</h1>
      <div className="chat-support-window">
        {messages.map(msg => (
          <div key={msg.id} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-support-form" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-support-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="chat-support-send-btn">Send</button>
      </form>
    </div>
  );
}

export default ChatSupport;