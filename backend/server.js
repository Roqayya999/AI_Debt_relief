const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const loanRoutes = require("./routes/loanRoutes");

console.log("✅ Auth Routes Loaded");
console.log("Auth Routes:", authRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/loan", loanRoutes);

// ================= TEST ROUTES =================
app.get("/", (req, res) => {
  res.send("AI Debt Relief Backend Running...");
});

app.get("/test", (req, res) => {
  res.send("Server Working");
});

// Test Forgot Password Route
app.post("/api/auth/forgot-password", (req, res) => {
  res.json({
    message: "Forgot Password Route Working",
  });
});

// ================= MONGODB =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    console.log("Database:", mongoose.connection.name);
  })
  .catch((err) => {
    console.log("❌ MongoDB Error");
    console.log(err);
  });

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});