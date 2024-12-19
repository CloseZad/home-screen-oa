import React, { useState } from "react";
import "./messagebox.css";
import { AiOutlineSend } from "react-icons/ai";

const MessageBox = () => {
  const [message, setMessage] = useState(""); // State to hold the input value

  const handleSend = () => {
    console.log("Message sent:", message); // Log the message or handle it as needed
    setMessage(""); // Clear the input box after sending
  };

  return (
    <div className="message-box">
      <input
        type="text"
        className="message-input"
        placeholder="Let me know how I can help you!"
        value={message} // Bind the input value to the state
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
      />
      <button className="send-button" onClick={handleSend}>
        <AiOutlineSend size={20} />
      </button>
    </div>
  );
};

export default MessageBox;
