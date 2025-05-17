import { FaLock, FaUser } from "react-icons/fa";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login method from context

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (
      savedUser.username === username &&
      savedUser.password === password
    ) {
      alert("Login successful!");
      login(); // ✅ Mark as logged in globally
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Incorrect username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="login-inputs" onSubmit={handleSubmit}>
          <h2>Wandernest</h2>
          <h3>Hello Again!</h3>
          <p>We are happy to have you back.</p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              className="input-field"
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">Log In</button>

          <h4 className="register-text">
            Don't have an account? <Link to="/register"><span>Register now</span></Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Login;
