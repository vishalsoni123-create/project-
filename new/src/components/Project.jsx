import img from '../image/htmlimage.jpg'
import img2 from '../image/js.webp'
import img3 from '../image/react2.jpg'
import img4 from '../image/vbproject.png'
import img5 from '../image/pythonproject.png'
import img6 from '../image/phpproject.png'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
export function Project() {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    const student = localStorage.getItem("student");

    if (!student) {
      // User not logged in → go to login page
      alert("Please login before buying a project!");
      navigate("/payment"); // assuming "/" is your Login page
    } else {
      // User is logged in → open payment or project details
      navigate("/login"); // or wherever you want to go
    }
  };
  return (
    <div className="project-main">
      <div className="project-con">
        <h1>Buy Ready-Made Projects</h1>
        <p>Choose from our premium collection of projects in VB, JS, React, HTML, Python & more</p>
        <Link to="/">Home</Link>
      </div>
      <div className='project-card-con'>
        <div className='card'>
          <img src={img} />
          <div className="card-content">
            <h3>HTML Project</h3>
            <p>Responsive static HTML & CSS project with professional design.</p>
            <div className="price"> ₹500</div>
            <a href="#" className="project-btn"  onClick={handleBuyNow}>Buy Now</a>
          </div>
        </div>
        <div className="card">
          <img src={img2} />
          <div className="card-content">
            <h3>JavaScript Project</h3>
            <p>Dynamic and interactive web project using JavaScript.</p>
            <div className="price"> ₹1000</div>
            <a href="#" className="project-btn" onClick={handleBuyNow}>Buy Now</a>
          </div>
        </div>


        <div className="card">
          <img src={img3} />
          <div className="card-content">
            <h3>React Project</h3>
            <p>Complete React project with routing, APIs & state management.</p>
            <div className="price"> ₹2,000</div>
            <a href="#" className="project-btn" onClick={handleBuyNow}>Buy Now</a>
          </div>
        </div>


        <div className="card">
          <img src={img4} />
          <div className="card-content">
            <h3>VB Project</h3>
            <p>Visual Basic project with database connectivity & reports.</p>
            <div className="price"> ₹800</div>
            <a href="#" className="project-btn" onClick={handleBuyNow}>Buy Now</a>
          </div>
        </div>


        <div className="card">
          <img src={img5} />
          <div className="card-content">
            <h3>Python Project</h3>
            <p>Powerful Python project with AI/ML modules and GUI support.</p>
            <div className="price"> ₹1000</div>
            <a href="#" className="project-btn">Buy Now</a>
          </div>
        </div>


        <div className="card">
          <img src={img6} />
          <div className="card-content">
            <h3>PHP Project</h3>
            <p>Full-stack PHP project with MySQL database and admin panel.</p>
            <div className="price"> ₹800</div>
            <a href="#" className="project-btn">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}