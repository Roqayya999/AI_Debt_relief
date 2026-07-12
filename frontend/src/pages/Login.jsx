import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <div className="auth-header">
          <h1>Welcome Back 👋</h1>
          <p>Login to continue your AI Debt Relief journey</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
<p
  style={{
    textAlign: "right",
    color: "blue",
    cursor: "pointer",
    marginBottom: "15px",
  }}
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</p>
          {/* Login Button */}
          <button className="auth-btn" type="submit">
            Login
          </button>

          {/* Back Button */}
          <button
            className="auth-btn"
            type="button"
            onClick={() => navigate("/")}
            style={{ marginTop: "15px" }}
          >
            Back
          </button>

        </form>

        <p className="auth-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;