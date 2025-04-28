// routes/emotion.js
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_HUGGINGFACE_API_KEY`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: text })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Emotion API error:", error);
    res.status(500).json({ error: "Failed to analyze emotion." });
  }
});

module.exports = router;