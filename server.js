const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// POST /bfhl
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: "Aryan_Kumar_25062003",
        email: "2221367.aids.coe@cgc.edu.in",
        roll_number: "2221367",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET /bfhl
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});
app.get("/", (req, res) => {
    res.send("Backend is running!");
});
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
