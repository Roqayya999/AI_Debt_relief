import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [loan, setLoan] = useState({
    totalDebt: 0,
    monthlyEMI: 0,
    creditScore: 0,
  });

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/loan/${user.id}`
        );

        setLoan(res.data);
      } catch (error) {
        console.log("Loan not found");
      }
    };

    if (user?.id) {
      fetchLoan();
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <div className="topbar">
        <h1>AI Debt Relief Dashboard 🚀</h1>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <h2>Welcome, {user.name || "User"} 👋</h2>

      <div className="cards">

        <div className="card">
          <h3>Total Debt</h3>
          <h1>₹{loan.totalDebt?.toLocaleString() || "0"}</h1>
        </div>

        <div className="card">
          <h3>Monthly EMI</h3>
          <h1>₹{loan.monthlyEMI?.toLocaleString() || "0"}</h1>
        </div>

        <div className="card">
          <h3>Credit Score</h3>
          <h1>{loan.creditScore || "0"}</h1>
        </div>

        <div className="card">
          <h3>Settlement Chance</h3>
         <h1>
  {loan.creditScore >= 750
    ? "90%"
    : loan.creditScore >= 700
    ? "82%"
    : loan.creditScore >= 650
    ? "70%"
    : "50%"}
</h1>
        </div>

      </div>

      <div className="ai-box">
        <h2>🤖 AI Debt Analysis</h2>

        <p>
          Your financial health is stable.
          Increase your monthly EMI to reduce your debt faster.
        </p>

       <Link to="/report">
  <button className="analyze-btn">
    Generate AI Report
  </button>
  <Link to="/ai-assistant">
  <button className="analyze-btn">
    🤖 AI Debt Assistant
  </button>
</Link>
</Link>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/loans">
          <button className="analyze-btn">
            Add Loan Details
          </button>
        </Link>

        <Link to="/settlement">
          <button className="analyze-btn">
            Settlement Calculator
          </button>
        </Link>

        <Link to="/negotiation">
  <button className="analyze-btn">
    AI Negotiation Letter
  </button>
</Link>

<Link to="/financial-health">
  <button className="analyze-btn">
    💰 Financial Health Analysis
  </button>
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;