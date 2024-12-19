import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newUsername, setNewUsername] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleUsernameChange = () => {
    setUsername(newUsername);
  };

  const handlePasswordChange = () => {
    setPassword(newPassword);
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleUsernameChange}>
          Change Username
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handlePasswordChange}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
