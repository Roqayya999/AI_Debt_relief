import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Loans() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [loanData, setLoanData] = useState({
    totalDebt: "",
    monthlyEMI: "",
    creditScore: "",
  });

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/loan/save",{
        userId: user.id,
        ...loanData,
      });

      alert("Loan Details Saved Successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert("Error Saving Loan Details");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <div className="auth-header">
          <h1>Loan Details 💳</h1>
          <p>Enter your loan information</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Total Debt (₹)</label>
            <input
              type="number"
              name="totalDebt"
              placeholder="Enter Total Debt"
              value={loanData.totalDebt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Monthly EMI (₹)</label>
            <input
              type="number"
              name="monthlyEMI"
              placeholder="Enter Monthly EMI"
              value={loanData.monthlyEMI}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Credit Score</label>
            <input
              type="number"
              name="creditScore"
              placeholder="Enter Credit Score"
              value={loanData.creditScore}
              onChange={handleChange}
              required
            />
          </div>

          <button className="auth-btn" type="submit">
            Save Loan
          </button>

          <button
            className="auth-btn"
            type="button"
            onClick={() => navigate("/dashboard")}
            style={{ marginTop: "15px" }}
          >
            Back
          </button>

        </form>

      </div>
    </div>
  );
}

export default Loans;