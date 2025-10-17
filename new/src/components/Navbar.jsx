import { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom";
export function Navbar()
{
    const [btn,setBtn]=useState(false);
    function handle(){
      console.log("inside ture");
      setBtn(!btn);
    }
    return(
       <div className="nav">
         <h1 className="logo">TechHub</h1>
         <div className={btn ?"responsive":"ul-main-con"}>
         <ul className="ul-con" style={{marginTop:"10px"}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Our Services</a></li>
            <li><a href="#contact">Contact us</a></li>
         </ul>
         </div>
        <div className="nav-btn-con">
         <Link to="/login" className="nav-btn">Login</Link>
         <a href="" className="nav-btn">SignUp</a>
        </div>
         <div onClick={()=>handle()} className="responsive-btn">
           <div className="line"></div>
           <div className="line"></div>
           <div className="line"></div>
         </div>
       </div>
    )
}