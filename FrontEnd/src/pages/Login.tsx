import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Handle login logic here (validation, API call, etc.)
    console.log("Logging in with:", { usernameOrEmail, password });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="usernameOrEmail" className="form-label">
          Email or Username
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
