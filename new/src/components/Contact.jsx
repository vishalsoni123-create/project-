import { useState } from "react";
import "./navbar.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name,
    email,
    phone,
    message,
  };

  const response = await fetch("http://localhost/techhub/backend/contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  alert(result.message);
};


  return (
    <div id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label>Full Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email Address:</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Contact No:</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label>Write Message:</label>
              <textarea
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5209/5209678.png"
              alt="contact illustration"
            />
            <p>Let’s get you back online!</p>
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          width="100%"
          height="650"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kushalpur,raipur+(website)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
