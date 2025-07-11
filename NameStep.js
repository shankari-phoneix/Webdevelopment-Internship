import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NameStep.css";

function NameStep() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("firstName", first);
    localStorage.setItem("lastName", last);
    navigate('/registeremail');
 // Next step in registration
  };

  return (
    <div className="center-box">
      <h2>Enter your name</h2>
      <input placeholder="First name" value={first} onChange={(e) => setFirst(e.target.value)} />
      <input placeholder="Last name" value={last} onChange={(e) => setLast(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default NameStep;
