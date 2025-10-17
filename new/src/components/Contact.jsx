
import "./navbar.css";
export function Contact() {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <form>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter Name" required />

              <label>Email Address:</label>
              <input type="email" placeholder="Enter Email" required />

              <label>Contact No:</label>
              <input type="tel" placeholder="Enter Phone Number" required />

              <label>Write Message:</label>
              <textarea placeholder="Message"></textarea>

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
      <section className="map"><iframe width="100%" height="650"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kushalpur,raipur+(website)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">mappa della popolazione Italia</a></iframe></section>
    </div>
  );
};

export default Contact;
