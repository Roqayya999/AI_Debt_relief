import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>💳</span> AI Debt Relief
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-left">

          <span className="badge">
            🤖 AI Powered Financial Assistant
          </span>

          <h1>
            AI Powered
            <br />
            Debt Relief &
            <span> Financial Recovery</span>
          </h1>

          <p>
            Manage loans, analyze financial health, generate AI settlement
            strategies and recover financially with our intelligent platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="secondary"
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>

          </div>

          <div className="stats">

            <div className="card">
              <h2>25K+</h2>
              <p>Users</p>
            </div>

            <div className="card">
              <h2>95%</h2>
              <p>Success Rate</p>
            </div>

            <div className="card">
              <h2>24/7</h2>
              <p>AI Support</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="circle"></div>

          <div className="phone">

            <h3>AI Dashboard</h3>

            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar short"></div>

            <button>
              Debt Score: Excellent
            </button>

          </div>

        </div>

      </section>

      {/* Features */}
      <section id="features" className="info-section">
        <h1>✨ Features</h1>

        <div className="cards">

          <div className="card">
            <h3>🤖 AI Report</h3>
            <p>Generate intelligent financial analysis instantly.</p>
          </div>

          <div className="card">
            <h3>💳 Loan Management</h3>
            <p>Store and manage all loan details securely.</p>
          </div>

          <div className="card">
            <h3>💰 Settlement Calculator</h3>
            <p>Estimate your possible loan settlement amount.</p>
          </div>

          <div className="card">
            <h3>📄 AI Letter</h3>
            <p>Generate professional negotiation letters.</p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="info-section">
        <h1>🛠 Services</h1>

        <div className="cards">

          <div className="card">
            <h3>Loan Analysis</h3>
            <p>Analyze debt and EMI using AI.</p>
          </div>

          <div className="card">
            <h3>Credit Score Review</h3>
            <p>Understand your financial health.</p>
          </div>

          <div className="card">
            <h3>Debt Settlement</h3>
            <p>Estimate settlement opportunities.</p>
          </div>

          <div className="card">
            <h3>Negotiation Support</h3>
            <p>Create professional settlement request letters.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="info-section">

        <h1>📞 Contact Us</h1>

        <div className="card">

          <h3>AI Debt Relief</h3>

          <p>Email : abdulroqayya999@gmail.com</p>

          <p>Phone : +91 7382890999</p>

          <p>Location : Hyderabad, India</p>

          <p>
            We are available 24/7 to assist you with debt management and
            financial recovery.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
          background: "#1f2937",
          color: "white",
        }}
      >
        © 2026 AI Debt Relief | Built with React, Node.js & MongoDB
      </footer>
    </>
  );
}

export default Home;