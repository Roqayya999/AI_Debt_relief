import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        {
          email,
          password,
        }
      );

      setSuccess(true);

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        {!success ? (
          <>
            <h2>Reset Password</h2>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button className="auth-btn">
                Reset Password
              </button>

            </form>
          </>
        ) : (
          <>
            <h2 style={{ color: "green" }}>
              ✅ Password Reset Successful
            </h2>

            <p>
              Your password has been updated successfully.
            </p>

            <button
              className="auth-btn"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default ResetPassword;