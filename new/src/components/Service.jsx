import image from "../image/1695217488591-Employee+Training+Methods-removebg-preview.png"
import image1 from "../image/23790665.webp"
import image2 from "../image/2025-06-26-13.48.30.jpg"
import image3 from "../image/1741438736510.png"
import { Link } from "react-router-dom"
export function Service() {
  const nameofservice={
    fontWeight:"700",
    color:"#16213e",
    marginTop:"10px"
  }
  return (
   <div className="service-con" >
        <div id="service" className="service-main" style={{ maxWidth: "1300px", margin: "auto"}}>
      <h1 style={{ textAlign: "center",paddingTop:"100px"}}>Features</h1>
      <h1 style={{ textAlign: "center" }}>Our Features & Services</h1>
      <div className="service">
        <div className="service-div">
          <div className="service-card">
            <img src={image} width="100%" height="48%"/>
            <div style={{textAlign:"center"}}>
              <h4 style={nameofservice}>IT Solution</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum sapiente tempore  </p>
            </div>
            <div className="service-btn" >
              <button className="actual-btn">click me</button>
            </div>
          </div>
        </div>
        <div className="service-div">
            <div className="service-card">
            <img src={image1} width="100%" height="48%"/>
            <div style={{textAlign:"center"}}>
              <h4 style={nameofservice}>Mentorship</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum sapiente tempore  </p>
            </div>
            <div className="service-btn" >
             <Link className="actual-btn" to="/mentorship">Click me</Link>
            </div>
          </div>
        </div>
        <div className="service-div">
             <div className="service-card">
            <img src={image2} width="100%" height="48%"/>
            <div style={{textAlign:"center"}}>
              <h4 style={nameofservice}>Internship & Tranning</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum sapiente tempore  </p>
            </div>
            <div className="service-btn" >
              <button className="actual-btn">click me</button>
            </div>
          </div>
        </div>
        <div className="service-div">
            <div className="service-card">
            <img src={image3} width="100%" height="48%"/>
            <div style={{textAlign:"center"}}>
              <h4 style={nameofservice}>Project</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum sapiente tempore  </p>
            </div>
            <div className="service-btn" >
              <Link className="actual-btn" to="/project">Click me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}