import "./admin.css";
export function EditSignup(){
  return (
    <div className="registration-container">
      <form className="registration-form">
        <h2>Student Registration</h2>

        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>Student Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="tel" placeholder="Enter your number" required />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-options">
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
              <label><input type="radio" name="gender" value="other" /> Other</label>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <select>
              <option>Select City</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Mumbai</option>
            </select>
          </div>
          <div className="form-group">
            <label>State</label>
            <select>
              <option>Select State</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>District</label>
            <select>
              <option>Select District</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
            </select>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Enter your address" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="form-row">
          <div className="form-group">
            <label>Referral Name</label>
            <input type="text" placeholder="Enter referral name" />
          </div>
          <div className="form-group">
            <label>College Name</label>
            <input type="text" placeholder="Enter your college name" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="form-row">
          <div className="form-group">
            <label>Branch</label>
            <input type="text" placeholder="Enter your branch" />
          </div>
          <div className="form-group">
            <label>Enrolled Course</label>
            <input type="text" placeholder="Enter your course" />
          </div>
        </div>

        {/* Button */}
        <button className="signup" type="submit">Register</button>
      </form>
    </div>
  );
};


