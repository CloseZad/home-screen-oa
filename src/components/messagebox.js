import React, { useState } from "react";
import "./messagebox.css";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

const MessageBox = ({ addMessage }) => {
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        if (message.trim() === "") return;

        try {
            // Add the user message to the chat
            addMessage({ role: "user", content: message });

            // Send the message to the backend
            const response = await axios.post("http://localhost:5000/chat", {
                message,
            });

            // Add the ChatGPT response to the chat
            addMessage({ role: "assistant", content: response.data.response });

            // Clear the input box
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="message-box">
            <input
                type="text"
                className="message-input"
                placeholder="Let me know how I can help you!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-button" onClick={sendMessage}>
                <AiOutlineSend size={20} />
            </button>
        </div>
    );
};

export default MessageBox;
