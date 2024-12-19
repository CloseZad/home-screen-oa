const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

//chatgpt endpoints
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`,
                },
            }
        );

        const chatResponse = response.data.choices[0].message.content;
        res.json({ response: chatResponse });
    } catch (error) {
        console.error("Error communicating with OpenAI:", error.message);
        res.status(500).json({ error: "Failed to get response from ChatGPT." });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
