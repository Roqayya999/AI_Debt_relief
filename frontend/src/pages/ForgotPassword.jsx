import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      alert(res.data.message);

      navigate("/verify-otp", {
        state: { email },
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Registered Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="auth-btn">
            Send OTP
          </button>

          <button
            type="button"
            className="auth-btn"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/login")}
          >
            Back
          </button>

        </form>

      </div>
    </div>
  );
}

export default ForgotPassword;