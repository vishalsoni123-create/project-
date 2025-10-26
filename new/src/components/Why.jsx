import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBolt,
  faLightbulb,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export function Why(){
  return (
    <div className="why-upper-con">
            <section className="why-container">
      <div className="why-text">
        <h1>Why Choose Us</h1>
        <p>
          At <b>TechHub</b>, we combine technology, creativity, and strategy to
          help your business grow. Our dedicated team ensures top-quality work,
          fast delivery, and round-the-clock support.
        </p>

        <div className="features">
          <div className="feature-box">
            <FontAwesomeIcon icon={faUserTie} className="icon" />
            <h3>Expert Team</h3>
            <p>
              Experienced professionals dedicated to delivering high-quality
              solutions.
            </p>
          </div>

          <div className="feature-box">
            <FontAwesomeIcon icon={faBolt} className="icon" />
            <h3>Fast Delivery</h3>
            <p>
              We ensure every project is completed on time without compromising
              quality.
            </p>
          </div>

          <div className="feature-box">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h3>Innovative Ideas</h3>
            <p>
              We craft unique and innovative digital solutions tailored for your
              business.
            </p>
          </div>

          <div className="feature-box">
            <FontAwesomeIcon icon={faHeadset} className="icon" />
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock assistance to keep your business running smoothly.
            </p>
          </div>
        </div>
      </div>

      <div className="why-image">
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Why Choose Us"
        />
      </div>
    </section>
    </div>
  );
};
