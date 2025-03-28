require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const ConnectDb = require("./db/DbConnect");
const user_router = require("./routes/useroute");
const sensorRoutes = require("./routes/sensorRoutes");
const { parser } = require("./controllers/serialController");
const cookieParser = require("cookie-parser");

// ✅ Connect to Database
ConnectDb();

const app = express();
const PORT = process.env.PORT || 2000; // Match with frontend request

// ✅ Middleware
app.use(cors({
    origin: ["https://vanish-ytwu.onrender.com"], // Allowed Frontend URLs
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ✅ Fire Safety Chatbot Route
app.post("/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    try {
        const fireSafetyPrompt = `
            You are Vanish AI, a chatbot specializing in fire safety. Answer questions based on:
            - Legal & Insurance Guidance
            - Fire prevention measures
            - Emergency response
            - Safety protocols
            - Fire Safety for Kids & Elderly
            - Fire hazards and solutions
            
            User: ${message}
        `;

        const result = await model.generateContent(fireSafetyPrompt);
        const reply = result?.response?.candidates?.[0]?.content || "Sorry, I couldn't process that request.";

        res.json({ reply });
    } catch (error) {
        console.error("🔥 Gemini AI Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Routes
app.use("/user", user_router);
app.use("/sensor-data", sensorRoutes); // Ensure `sensorRoutes` properly handles `/sensor-data`

// ✅ Test Route
app.get("/", (req, res) => {
    res.status(200).send("🔥 Fire Safety Vanish is Running!");
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
