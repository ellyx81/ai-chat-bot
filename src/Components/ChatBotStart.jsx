import React from "react";
import "./ChatBotStart.css";
import logo from "../assets/Logo.svg";
const ChatBotStart = ({ onStartChat }) => {
  return (
    <div className="start-page">
      <button className="start-page-btn" onClick={onStartChat}>
        <img src={logo} className="logo" alt="Chat AI Logo" />
        Chat AI
      </button>
    </div>
  );
};

export default ChatBotStart;
