import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailStep.css";
 // Optional styling

function RegisterEmailStep() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/password"); // Go to next step (password)
  };

  return (
    <div className="center-box" style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Set your email</h2>
      <form onSubmit={handleNext}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default RegisterEmailStep;


