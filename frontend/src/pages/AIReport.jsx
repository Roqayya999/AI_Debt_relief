import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function AIReport() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

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
        console.log(error);
      }
    };

    if (user?.id) {
      fetchLoan();
    }
  }, []);

  let creditStatus = "";
  let risk = "";
  let chance = "";

  if (loan.creditScore >= 750) {
    creditStatus = "Excellent";
    risk = "Low";
    chance = "90%";
  } else if (loan.creditScore >= 700) {
    creditStatus = "Good";
    risk = "Low";
    chance = "82%";
  } else if (loan.creditScore >= 650) {
    creditStatus = "Average";
    risk = "Medium";
    chance = "70%";
  } else {
    creditStatus = "Poor";
    risk = "High";
    chance = "50%";
  }

  const months = loan.monthlyEMI
    ? Math.ceil(loan.totalDebt / loan.monthlyEMI)
    : 0;

  return (
    <div className="dashboard">

      <h1>🤖 AI Financial Report</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Debt</h3>
          <h1>₹{loan.totalDebt}</h1>
        </div>

        <div className="card">
          <h3>Monthly EMI</h3>
          <h1>₹{loan.monthlyEMI}</h1>
        </div>

        <div className="card">
          <h3>Credit Score</h3>
          <h1>{loan.creditScore}</h1>
        </div>

        <div className="card">
          <h3>Settlement Chance</h3>
          <h1>{chance}</h1>
        </div>

      </div>

      <div className="ai-box">

        <h2>AI Analysis</h2>

        <p><b>Credit Status:</b> {creditStatus}</p>

        <p><b>Risk Level:</b> {risk}</p>

        <p>
          <b>Estimated Debt-Free Time:</b> {months} Months
        </p>

        <hr />

        <h3>AI Recommendations</h3>

        <ul>
          <li>Pay EMI on time every month.</li>
          <li>Avoid taking new loans.</li>
          <li>Increase EMI whenever possible.</li>
          <li>Maintain a good credit score.</li>
          <li>Consider settlement if financial stress continues.</li>
        </ul>

      </div>

      <button
        className="auth-btn"
        onClick={() => window.print()}
      >
        Download Report
      </button>

      <button
        className="auth-btn"
        style={{ marginTop: "15px" }}
        onClick={() => navigate("/dashboard")}
      >
        Back
      </button>

    </div>
  );
}
export default AIReport;