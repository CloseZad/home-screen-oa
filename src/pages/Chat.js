import React from "react";
import Sidebar from "../components/sidebar";

const Chat = () => {
  return (
    <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ marginLeft: "80px", padding: "20px" }}>
      <h1>Chat Page</h1>
      <p>Welcome to the Chat Page!</p>
      </div>
    </div>
  );
};

export default Chat;