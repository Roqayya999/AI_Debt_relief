const axios = require("axios");

// ================= AI CHAT =================

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an AI financial advisor for an AI Debt Relief Platform. Help users with debt management, budgeting, loan repayment, settlement strategies, and financial planning.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    res.status(200).json({
      reply,
    });
  } catch (error) {
    console.log("AI Error:", error.response?.data || error.message);

    res.status(500).json({
      message: "AI service unavailable",
    });
  }
};

module.exports = {
  chatWithAI,
};