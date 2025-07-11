import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailStep.css";

function EmailStep() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLoginNext = () => {
    localStorage.setItem("email", email);
    navigate("/login"); // Go to login page
  };

  const handleCreateAccount = () => {
    navigate("/name"); // Go to registration flow
  };

  return (
    <div className="center-box">
      <h2>Sign in</h2>
      <p>to continue to Gmail</p>
      <input
        type="email"
        placeholder="Email or phone"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="small-link">Forgot email?</p>
      <button onClick={handleLoginNext}>Next</button>
      <p className="bottom-link" onClick={handleCreateAccount} style={{ cursor: "pointer" }}>
        Create account
      </p>
    </div>
  );
}

export default EmailStep;
