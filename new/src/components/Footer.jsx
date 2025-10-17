import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-about">
          <div className="footer-logo">
            <h2>TechHub</h2>
          </div>
          <p>
            Empowering students and professionals with cutting-edge software
            development and training programs. <br /> <strong>Learn. Build. Grow.</strong>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@techhub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>TechHub</span> | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

