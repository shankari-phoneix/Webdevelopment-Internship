import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PasswordStep.css";

function PasswordStep() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    if (password !== confirm) return alert("Passwords do not match");

    try {
      await axios.post("http://localhost:5000/register", {
        email, firstName, lastName, password,
      });
      alert("User registered successfully");
      navigate("/login");
    } catch (e) {
      alert(e.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="center-box">
      <h2>Create a strong password</h2>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type={show ? "text" : "password"}
        placeholder="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} /> Show password
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default PasswordStep;
