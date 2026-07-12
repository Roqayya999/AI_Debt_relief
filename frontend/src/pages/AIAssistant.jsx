import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AIAssistant() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    const q = question.toLowerCase();

    if (q.includes("credit score")) {
      setAnswer(
        "A good credit score is above 750. Pay EMIs on time, keep your credit utilization below 30%, and avoid missing payments."
      );
    } else if (q.includes("debt")) {
      setAnswer(
        "Reduce unnecessary expenses, pay high-interest loans first, and create a monthly repayment plan."
      );
    } else if (q.includes("loan")) {
      setAnswer(
        "Compare interest rates before borrowing and ensure your monthly EMI fits comfortably within your budget."
      );
    } else if (q.includes("emi")) {
      setAnswer(
        "Paying EMIs on time improves your credit score and helps avoid penalties."
      );
    } else if (q.includes("settlement")) {
      setAnswer(
        "Debt settlement allows you to negotiate with the lender to pay less than the total amount owed. It may affect your credit score."
      );
    } else if (q.includes("financial health")) {
      setAnswer(
        "Maintain a healthy balance between income, expenses, savings, and debt. Aim to save regularly and reduce high-interest debt."
      );
    } else {
      setAnswer(
        "I'm here to help with debt, loans, EMIs, credit scores, settlements, and financial health. Please ask a related question."
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>🤖 AI Debt Assistant</h2>

        <p>
          Ask questions about loans, debt, EMI, settlements, credit score,
          or financial health.
        </p>

        <textarea
          rows="5"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        />

        <button
          className="auth-btn"
          style={{ marginTop: "15px" }}
          onClick={askAI}
        >
          Ask AI
        </button>

        {answer && (
          <div
            style={{
              marginTop: "20px",
              background: "#f4f4f4",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>🤖 AI Response</h3>
            <p>{answer}</p>
          </div>
        )}

        <button
          className="auth-btn"
          style={{ marginTop: "20px" }}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default AIAssistant;