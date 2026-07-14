const express = require("express");
const router = express.Router();

const { chatWithAI } = require("../controllers/aiController");

// AI Chat Route
router.post("/chat", chatWithAI);

module.exports = router;