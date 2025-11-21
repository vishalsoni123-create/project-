import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export function FrontLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/techhub/backend/login.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        alert("Login Successful!");
        localStorage.setItem("student", JSON.stringify(data.user));
        navigate("/payment"); // or any page you want after login
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Server error. Please try again later.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back!</h1>
        <p>Login to continue your journey with <span style={{ color: "purple" }}>TechHub</span></p>

        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label>Email:</label><br />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-div">
            <label>Password:</label><br />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-btn">
            <button type="submit">Login</button>
          </div>

          {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

          <div className="account">
            <p><a href="#">Forget Password</a></p>
            <p>
              Don’t have an account?{" "}
              <Link style={{ fontWeight: "600" }} to="/signup">Sign Up</Link>
            </p>
            <Link to="/" className="header-link">Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
