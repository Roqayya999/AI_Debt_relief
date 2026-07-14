# 💰 AI_Debt_Relief Platform

An AI-powered Debt Relief Platform built using the MERN Stack that helps users manage loans, analyze financial health, generate AI-powered debt reports, calculate settlements, and receive personalized financial assistance.

---

## 📌 Features

- 👤 User Registration & Login (JWT Authentication)
- 🔐 Secure Password Encryption using bcrypt
- 📧 Email Verification & Password Reset (OTP via Gmail)
- 🤖 AI Financial Assistant
- 📊 AI Debt Analysis Report
- 💳 Loan Management System
- 📈 Financial Health Dashboard
- 🧮 Settlement Calculator
- 📄 AI Negotiation Letter Generator
- 🔒 Protected Routes
- 📱 Responsive UI
- ☁️ Ready for Render Deployment

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Nodemailer
- OpenAI API

---

## 📂 Project Structure

```
AI-Debt-Relief/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Roqayya999/AI-Debt-Relief.git
```

Move into project folder

```bash
cd AI-Debt-Relief
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_gmail_app_password

OPENAI_API_KEY=your_openai_api_key
```

Run Backend

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Authentication

- Register New User
- Login
- JWT Token Authentication
- Forgot Password
- OTP Verification
- Reset Password

---

## AI Modules

- AI Chat Assistant
- AI Debt Report Generator
- Financial Health Analysis
- Settlement Recommendation
- Negotiation Letter Generator

---

## Email Service

The project uses **Nodemailer** with Gmail App Passwords to send:

- Welcome Email
- Password Reset OTP

---

## Database

MongoDB Atlas is used for storing

- Users
- Loans
- OTP Information

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/forgot-password
POST /api/auth/verify-otp
POST /api/auth/reset-password
```

### Loans

```
GET /api/loans
POST /api/loans
PUT /api/loans/:id
DELETE /api/loans/:id
```

### AI

```
POST /api/ai/chat
POST /api/ai/report
```

---

## Deployment

Backend

- Render

Frontend

- Render Static Site

Database

- MongoDB Atlas

---

## Future Enhancements

- Credit Score Prediction
- Payment Reminder Notifications
- AI Budget Planner
- EMI Calculator
- PDF Report Download
- Voice Assistant
- Admin Dashboard

---

## Screenshots

Add screenshots of:

- Home Page
- Login Page
- Register Page
- Dashboard
- Loan Management
- AI Assistant
- AI Report
- Financial Health
- Settlement Calculator

---

## Author

**Abdul Roqayya**

GitHub:
https://github.com/Roqayya999

---

## License

This project is developed for educational purposes and academic demonstration.

---

## ⭐ If you like this project

Please give it a ⭐ on GitHub.

