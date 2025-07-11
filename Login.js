import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      alert("Login successful");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/thankyou");
    } catch (e) {
      alert(e.response?.data?.message || "Login failed");
    }
  };

  
  return (
    <div className="center-box">
      <h2>Hello</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={show ? "text" : "password"}
        placeholder="Verify it's you"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
        Show password
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
