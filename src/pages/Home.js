import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import MessageBox from "../components/messagebox";
import AttachmentBox from "../components/attachment";

const Home = () => {
    const [messages, setMessages] = useState([]);
    const [isChatStarted, setIsChatStarted] = useState(false); // Track whether the chat has started

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const startChat = () => {
        setIsChatStarted(true);
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "80px", width: "100%" }}>
                <Topbar />
                {!isChatStarted ? (
                    // Home Screen
                    <div
                        style={{
                            paddingTop: "60px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "calc(100vh - 60px)",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <h1 style={{ color: "grey" }}>Home Page</h1>
                            <h3 style={{ color: "grey" }}>
                                Hi Kim, I'm Tyce, your Sales Partner.
                            </h3>
                            <h3 style={{ color: "grey" }}>
                                I'm here to help you sell your projects.
                            </h3>
                            <br />
                            <h4 style={{ color: "grey" }}>
                                What do you need assistance with today?
                            </h4>
                            <div style={{ marginBottom: "20px" }}>
                                <button
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        marginRight: "10px",
                                        padding: "10px 20px",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={startChat}
                                >
                                    Start Chat
                                </button>
                                <AttachmentBox /> 
                            </div>
                        </div>
                    </div>
                ) : (
                    // Chat Screen
                    <div style={{ padding: "20px" }}>
                        <div
                            style={{
                                height: "400px",
                                overflowY: "auto",
                                border: "1px solid #ccc",
                                padding: "10px",
                                marginBottom: "20px",
                            }}
                        >
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    style={{
                                        textAlign: msg.role === "user" ? "right" : "left",
                                        margin: "10px 0",
                                        color: msg.role === "user" ? "blue" : "black",
                                    }}
                                >
                                    {msg.content}
                                </div>
                            ))}
                        </div>
                        <MessageBox addMessage={addMessage} />
                        <AttachmentBox /> 
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
