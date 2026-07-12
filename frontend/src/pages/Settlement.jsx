import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Settlement() {
  const navigate = useNavigate();

  const [loan, setLoan] = useState({
    totalDebt: "",
    monthlyEMI: "",
    creditScore: "",
  });

  const [settlement, setSettlement] = useState(null);
  const [savings, setSavings] = useState(null);

  const calculateSettlement = () => {
    if (!loan.totalDebt) {
      alert("Please enter Total Debt");
      return;
    }

    const totalDebt = Number(loan.totalDebt);

    const settlementAmount = Math.round(totalDebt * 0.65);
    const savedAmount = totalDebt - settlementAmount;

    setSettlement(settlementAmount);
    setSavings(savedAmount);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <div className="auth-header">
          <h1>Settlement Calculator 💰</h1>
          <p>Calculate your estimated settlement amount</p>
        </div>

        <div className="input-group">
          <label>Total Debt (₹)</label>
          <input
            type="number"
            placeholder="Enter Total Debt"
            value={loan.totalDebt}
            onChange={(e) =>
              setLoan({
                ...loan,
                totalDebt: e.target.value,
              })
            }
          />
        </div>

        <div className="input-group">
          <label>Monthly EMI (₹)</label>
          <input
            type="number"
            placeholder="Enter Monthly EMI"
            value={loan.monthlyEMI}
            onChange={(e) =>
              setLoan({
                ...loan,
                monthlyEMI: e.target.value,
              })
            }
          />
        </div>

        <div className="input-group">
          <label>Credit Score</label>
          <input
            type="number"
            placeholder="Enter Credit Score"
            value={loan.creditScore}
            onChange={(e) =>
              setLoan({
                ...loan,
                creditScore: e.target.value,
              })
            }
          />
        </div>

        <button
          className="auth-btn"
          onClick={calculateSettlement}
        >
          Calculate Settlement
        </button>

        {settlement !== null && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <h2>Settlement Result</h2>

            <h1 style={{ color: "green" }}>
              ₹{settlement.toLocaleString()}
            </h1>

            <p>
              Estimated Savings:
              <strong>
                {" "}
                ₹{savings.toLocaleString()}
              </strong>
            </p>

            <p>
              AI Recommendation:
              Try negotiating your debt around
              <strong> ₹{settlement.toLocaleString()}</strong>.
            </p>
          </div>
        )}

        <button
          className="auth-btn"
          type="button"
          onClick={() => navigate("/dashboard")}
          style={{ marginTop: "15px" }}
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default Settlement;