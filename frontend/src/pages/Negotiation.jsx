import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Negotiation() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");
  const [letter, setLetter] = useState("");

  const generateLetter = () => {
    if (!name || !bank || !amount) {
      alert("Please fill all fields!");
      return;
    }

    const generatedLetter = `Date: ${new Date().toLocaleDateString()}

To,
The Branch Manager,
${bank}

Subject: Request for One-Time Loan Settlement

Respected Sir/Madam,

My name is ${name}. I am writing this letter to request a One-Time Settlement (OTS) for my outstanding loan.

Due to financial difficulties, I am unable to continue making my regular loan payments. My current outstanding loan amount is ₹${amount}.

I kindly request you to consider my application and allow me to settle my loan under your settlement policy.

I assure you that I will make the agreed settlement payment immediately upon approval.

I sincerely hope you will consider my request positively.

Thank you for your understanding.

Yours Faithfully,

${name}`;

    setLetter(generatedLetter);
  };

  const copyLetter = () => {
    if (!letter) {
      alert("Generate the letter first!");
      return;
    }

    navigator.clipboard.writeText(letter);
    alert("Letter copied successfully!");
  };

  const saveLetter = () => {
    if (!letter) {
      alert("Generate the letter first!");
      return;
    }

    const blob = new Blob([letter], {
      type: "text/plain;charset=utf-8",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "AI_Negotiation_Letter.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

    alert("Letter saved successfully!");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <div className="auth-header">
          <h1>🤖 AI Negotiation Letter</h1>
          <p>Create a professional loan settlement request</p>
        </div>

        <div className="input-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Bank Name</label>
          <input
            type="text"
            placeholder="Enter bank name"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Outstanding Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter outstanding amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          className="auth-btn"
          onClick={generateLetter}
        >
          Generate Letter
        </button>

        {letter && (
          <>
            <div
              style={{
                marginTop: "20px",
                background: "#f8f9fa",
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                whiteSpace: "pre-wrap",
                textAlign: "left",
                maxHeight: "350px",
                overflowY: "auto",
              }}
            >
              {letter}
            </div>


            <button
              className="auth-btn"
              onClick={saveLetter}
              style={{ marginTop: "15px" }}
            >
              Save Letter
            </button>
          </>
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

export default Negotiation;