const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// ================= EMAIL TRANSPORTER =================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email Configuration Error:");
    console.log(error);
  } else {
    console.log("✅ Email Server Ready");
  }
});
// ================= REGISTER =================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
console.log("✅ User Created Successfully");
    // Send Welcome Email
    try {
      console.log("Sending Welcome Email...");
      await transporter.sendMail({
        from: `"AI Debt Relief Platform" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to AI Debt Relief Platform 🎉",
        html: `
          <div style="font-family:Arial;padding:20px">
            <h2>Hello ${name} 👋</h2>

            <p>Your account has been created successfully.</p>

            <h3>Welcome to AI Debt Relief Platform</h3>

            <ul>
              <li>✅ Loan Management</li>
              <li>✅ AI Reports</li>
              <li>✅ Settlement Calculator</li>
              <li>✅ Negotiation Letters</li>
            </ul>

            <p>Thank you for joining us.</p>
          </div>
        `,
      });

      console.log("✅ Welcome Email Sent");

    } catch (mailError) {
      console.log("Welcome Email Error:");
      console.log(mailError);
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LOGIN =================

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= FORGOT PASSWORD =================

const forgotPassword = async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await user.save();

    await transporter.sendMail({
      from: `"AI Debt Relief Platform" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset OTP",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>AI Debt Relief Platform</h2>

          <p>Your Password Reset OTP is:</p>

          <h1 style="color:#2563eb">${otp}</h1>

          <p>This OTP is valid for <b>5 minutes</b>.</p>

          <p>If you didn't request this password reset, please ignore this email.</p>
        </div>
      `,
    });

    console.log("✅ OTP Email Sent");

    res.status(200).json({
      message: "OTP Sent Successfully",
    });

  } catch (error) {

    console.log("Forgot Password Error:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= VERIFY OTP =================

const verifyOTP = async (req, res) => {
  try {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (!user.otpExpiry || user.otpExpiry < new Date()) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    res.status(200).json({
      message: "OTP Verified Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= RESET PASSWORD =================

const resetPassword = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.otp = "";
    user.otpExpiry = null;

    await user.save();

    res.status(200).json({
      message: "Password Reset Successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= EXPORTS =================

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOTP,
  resetPassword,
};