import { useState } from "react";
import "./navbar.css";

export function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [disct, setDisct] = useState("");
  const [address, setAddress] = useState("");
  const [ref, setRef] = useState("");
  const [clg, setClg] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // ✅ Simple Password Validation (at least 6 characters)
  const passwordRegex = /^.{6,}$/;

  function submit(e) {
    e.preventDefault();

    // 🔍 Validate Password
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setPasswordError(""); // clear error if valid

    const studentData = {
      name,
      mobile,
      email,
      password,
      city,
      state,
      district: disct,
      address,
      referral: ref,
      college: clg,
      branch,
      course,
    };

    fetch("http://localhost/techhub/backend/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        console.log(data);

        // reset form fields
        setName("");
        setMobile("");
        setEmail("");
        setPassword("");
        setCity("");
        setState("");
        setDisct("");
        setAddress("");
        setRef("");
        setClg("");
        setBranch("");
        setCourse("");
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={submit}>
        <h2>Student Registration</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="tel"
              placeholder="Enter your number"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length < 6) {
                  setPasswordError("Password must be at least 6 characters long.");
                } else {
                  setPasswordError("");
                }
              }}
            />
            {/* ⚠️ Show password validation error */}
            {passwordError && (
              <p className="error-message" style={{ color: "red", fontSize: "0.9em" }}>
                {passwordError}
              </p>
            )}
          </div>
        </div>

        {/* ✅ City, State, District required */}
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <select
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div className="form-group">
            <label>State</label>
            <select
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>District</label>
            <select
              required
              value={disct}
              onChange={(e) => setDisct(e.target.value)}
            >
              <option value="">Select District</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Referral Name</label>
            <input
              type="text"
              placeholder="Enter referral name"
              required
              value={ref}
              onChange={(e) => setRef(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              placeholder="Enter your college name"
              required
              value={clg}
              onChange={(e) => setClg(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Branch</label>
            <input
              type="text"
              placeholder="Enter your branch"
              required
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Enrolled Course</label>
            <input
              type="text"
              placeholder="Enter your course"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
        </div>

        <button className="signup" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
