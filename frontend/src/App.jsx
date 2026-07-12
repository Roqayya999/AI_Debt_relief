import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import Settlement from "./pages/Settlement";
import Negotiation from "./pages/Negotiation";
import AIReport from "./pages/AIReport";
import AIAssistant from "./pages/AIAssistant";
import FinancialHealth from "./pages/FinancialHealth";
// Forgot Password Pages
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/settlement" element={<Settlement />} />
      <Route path="/negotiation" element={<Negotiation />} />
      <Route path="/report" element={<AIReport />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
<Route path="/financial-health" element={<FinancialHealth />} />
      {/* Forgot Password */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;