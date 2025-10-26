
import { Link } from "react-router-dom";
import "./navbar.css";
export function Mentorship() {
  return (
    <div className="mentorship-page">
      <section className="hero">
        <h1>MENTORSHIP PROGRAM</h1>
        <p>
          Get guided by professionals from the tech industry! Our mentorship program helps you grow in software development, project building, and career readiness.
        </p>
        <Link to="/">Home</Link>
      </section>

      <section className="card-container-mentorship">
        <div className="card-mentorship">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Frontend Mentor" />
          <h3>Frontend Mentorship</h3>
          <p>
            Learn modern frontend technologies like React, HTML, CSS, and JavaScript with real-world project support.
          </p>
          <button>Join Now</button>
        </div>

        <div className="card-mentorship">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Backend Mentor" />
          <h3>Backend Mentorship</h3>
          <p>
            Master backend development using Node.js, Express, APIs, and database integration with hands-on training.
          </p>
          <button>Join Now</button>
        </div>

        <div className="card-mentorship">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Full Stack Mentor" />
          <h3>Full Stack Mentorship</h3>
          <p>
            Become a complete full-stack developer by combining frontend and backend knowledge with guided mentorship.
          </p>
          <button>Join Now</button>
        </div>

        <div className="card-mentorship">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" alt="Career Guidance" />
          <h3>Career Guidance</h3>
          <p>
            Get personalized advice on resume building, interviews, and finding the right career path in tech.
          </p>
          <button>Join Now</button>
        </div>
      </section>
    </div>
  );
}
