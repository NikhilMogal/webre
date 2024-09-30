import React, { useState } from "react";
import "./Signin.css";

const SignIn = ({ isVisible, onCancel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={`login-form-container ${!isVisible ? "hidden" : ""}`}>

      <div className="cancel-btn" onClick={onCancel}>&times;</div>

      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
