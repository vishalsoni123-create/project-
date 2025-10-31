import "./navbar.css";
export function Signup(){
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>
          Sign up to start your journey with{" "}
          <b style={{ color: "#043e7d" }}>TechHub</b>
        </p>

        <form>
          <div className="input-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
