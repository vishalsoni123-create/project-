import img from '../image/vision.png'
import img2 from '../image/target.png'
import { FaUserCheck,FaProjectDiagram,FaLightbulb } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
export function About(props) {
    return (
        <div id="about" >
            <h1 style={{ textAlign: "center", fontWeight: "600", color: "#00d9ff", paddingTop: "80px" }}>About TechHub</h1>
            <div className="about-main">
                <p >
                    At TechHub, we specialize in delivering world-class
                    software development and training solutions Our mission is to empower
                    individuals and businesses with the skills, tools, and technologies
                    needed to thrive in today’s digital era.
                    With expertise in Java, C++, JavaScript, HTML, and
                    modern frameworks, we provide both practical training and end-to-end
                    software development services. Whether you are a student learning to
                    code, a professional upgrading skills, 
                </p>
                <div className='sec-main'>
                    <div className='about-card'>
                        <h2 style={{color:"#00d9ff",fontWeight:"700"}}>Our vision <img src={img} width="30px" height="35px"/></h2>
                        <p>At Alpha360 Technologies, our vision is to empower businesses and individuals through innovative 
                            technology solutions that transform ideas into impactful realities. We strive to be a leading force 
                            in digital innovation, blending creativity, efficiency, and cutting-edge technology to deliver 
                            exceptional value to our clients.</p>
                    </div>
                    <div className='about-card'>
                        <h2 style={{color:"#00d9ff",fontWeight:"700"}}>Our mission <img src={img2} width="30px" height="35px"/></h2>
                        <p>At Alpha360 Technologies, our mission is to deliver innovative and reliable technology solutions that
                            empower businesses and individuals to thrive in a digital world. We are committed to understanding 
                            our clients’ needs deeply, designing creative solutions, and implementing them with precision and 
                            excellence.. </p>
                    </div>
            
       
                </div>
                <div className='sec-third'>
                    <div className='work'>
                         <span><IoBag /></span>
                        <h2 style={{color:"#00d9ff",fontWeight:"800"}}>Experience</h2>
                         <h3>3 years</h3>
                    </div>
                    <div className='work'>
                        <span ><FaUserCheck /></span>
                        <h2 style={{color:"#00d9ff",fontWeight:"800"}}>Satisfied Client</h2>
                        <h3>50+</h3>
                    </div>
                    <div className='work'>
                        <span><FaProjectDiagram /></span>
                        <h2 style={{color:"#00d9ff",fontWeight:"800"}}>Projects</h2>
                        <h3>90+</h3>
                    </div>
                    <div className='work'>
                        <span><FaLightbulb /></span>
                        <h2 style={{color:"#00d9ff",fontWeight:"800"}}>Our vision</h2>
                        <h3>Innovation & Growth</h3>
                    </div>
                </div>

                {/*<div className="about-main-left">
                    <h1>About TechHub</h1>
                    <p >
                        At <strong>TechHub</strong>, we specialize in delivering world-class
                        <strong> software development</strong> and <strong>training solutions </strong>Our mission is to empower
                        individuals and businesses with the skills, tools, and technologies
                        needed to thrive in today’s digital era.
                    </p>
                    <p >
                        With expertise in <strong>Java, C++, JavaScript, HTML</strong>, and
                        modern frameworks, we provide both practical training and end-to-end
                        software development services. Whether you are a student learning to
                        code, a professional upgrading skills, or a company seeking custom
                        solutions, TechHub is here to help.
                    </p>
                    <ul className="about-list" style={{ paddingLeft: "0px" }}>
                        <li>
                            <span className="icon">💻</span>
                            <p><strong>Hands-on Training</strong> – Learn by building real-world projects.</p>
                        </li>
                        <li>
                            <span className="icon">🚀</span>
                            <p><strong>Software Solutions</strong> – Scalable applications tailored to your needs.</p>
                        </li>
                        <li>
                            <span className="icon">📚</span>
                            <p><strong>Skill Development</strong> – From beginners to advanced learners.</p>
                        </li>
                        <li>
                            <span className="icon">🤝</span>
                            <p><strong>Collaboration</strong> – Supporting individuals and businesses to succeed.</p>
                        </li>
                    </ul>

                </div>
                <div className="about-main-right">
                    <img className="fade-scale-img" src={img} width="100%" height="95%" />
                </div>*/}
                <div className=''>

                </div>
            </div>
        </div>
    )
}