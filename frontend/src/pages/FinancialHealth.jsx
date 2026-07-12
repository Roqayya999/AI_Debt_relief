import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FinancialHealth() {
  const navigate = useNavigate();

  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [debt, setDebt] = useState("");

  const [result, setResult] = useState(null);

  const analyzeHealth = () => {
    const monthlyIncome = Number(income);
    const monthlyExpenses = Number(expenses);
    const totalSavings = Number(savings);
    const totalDebt = Number(debt);

    if (
      monthlyIncome <= 0 ||
      monthlyExpenses < 0 ||
      totalSavings < 0 ||
      totalDebt < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    let score = 100;

    const debtRatio = (totalDebt / monthlyIncome) * 100;
    const savingsRatio = (totalSavings / monthlyIncome) * 100;

    if (debtRatio > 100) score -= 40;
    else if (debtRatio > 50) score -= 20;

    if (monthlyExpenses > monthlyIncome) score -= 20;

    if (savingsRatio < 20) score -= 10;

    let status = "";
    let recommendation = "";

    if (score >= 80) {
      status = "Excellent";
      recommendation =
        "Your financial health is excellent. Continue saving regularly and pay your EMIs on time.";
    } else if (score >= 60) {
      status = "Good";
      recommendation =
        "Your financial health is good. Try to reduce unnecessary expenses and increase savings.";
    } else if (score >= 40) {
      status = "Average";
      recommendation =
        "Reduce debt and create an emergency fund to improve your financial stability.";
    } else {
      status = "Poor";
      recommendation =
        "High financial risk detected. Reduce debt immediately and seek professional financial guidance.";
    }

    setResult({
  score,
  status,
  recommendation,
  income: monthlyIncome,
  expenses: monthlyExpenses,
  savings: totalSavings,
  debt: totalDebt,
});
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>💰 Financial Health Analysis</h2>

        <div className="input-group">
          <label>Monthly Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter Monthly Income"
          />
        </div>

        <div className="input-group">
          <label>Monthly Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="Enter Monthly Expenses"
          />
        </div>

        <div className="input-group">
          <label>Total Savings</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            placeholder="Enter Total Savings"
          />
        </div>

        <div className="input-group">
          <label>Total Debt</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            placeholder="Enter Total Debt"
          />
        </div>

        <button className="auth-btn" onClick={analyzeHealth}>
          Analyze Financial Health
        </button>

        {result && (
  <div
    style={{
      marginTop: "25px",
      background: "#ffffff",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ color: "#2563eb" }}>
      📊 Financial Health Report
    </h2>

    <h1 style={{ fontSize: "45px", color: "#16a34a" }}>
      {result.score}/100
    </h1>

    {/* Progress Bar */}

    <div
      style={{
        width: "100%",
        height: "18px",
        background: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: `${result.score}%`,
          height: "100%",
          background:
            result.score >= 80
              ? "#16a34a"
              : result.score >= 60
              ? "#f59e0b"
              : "#ef4444",
        }}
      ></div>
    </div>

    <h3>Status : {result.status}</h3>

    <hr />

    <h3>Financial Summary</h3>

    <p>💰 Monthly Income : ₹{result.income}</p>

    <p>💸 Monthly Expenses : ₹{result.expenses}</p>

    <p>🏦 Savings : ₹{result.savings}</p>

    <p>📉 Total Debt : ₹{result.debt}</p>

    <hr />

    <h3>🤖 AI Recommendation</h3>

    <p>{result.recommendation}</p>
  </div>
)}
        

        <button
          className="auth-btn"
          style={{ marginTop: "15px" }}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default FinancialHealth;