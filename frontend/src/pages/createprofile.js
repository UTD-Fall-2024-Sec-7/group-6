import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCreateProfile = (e) => {
    e.preventDefault();

    if (username && password && email) {
      const newUser = { username, password, email };
      // Save the new user profile to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      // Redirect to login page
      navigate("/login");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <form onSubmit={handleCreateProfile}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default CreateProfile;
