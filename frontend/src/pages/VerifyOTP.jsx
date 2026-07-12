import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      alert(res.data.message);

      navigate("/reset-password", {
        state: { email },
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>Verify OTP</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>OTP</label>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button className="auth-btn">
            Verify OTP
          </button>

        </form>

      </div>
    </div>
  );
}

export default VerifyOTP;