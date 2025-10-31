import "./navbar.css";
import { Link } from 'react-router-dom'

export function Itsolution(){
  const programs = [
    {
      title: "Web Development",
      desc: "Learn React, JavaScript, and modern web technologies to build interactive websites.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Python Programming",
      desc: "Master Python for automation, data analysis, and backend development.",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      title: "UI/UX Design",
      desc: "Explore user interface design principles, wireframing, and prototyping.",
      img: "https://cdn-icons-png.flaticon.com/512/1829/1829582.png",
    },
    {
      title: "Machine Learning",
      desc: "Dive into data science and machine learning using Python libraries.",
      img: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
    },
  ];

  return (
    <section className="internship-section" id="internship">
      <h1 className="internship-title">Internship & Training</h1>
      <Link to="/">Home</Link>
      <h2 className="internship-subtitle">Explore Our Training Programs</h2>
                 
      <div className="internship-card-container">
        {programs.map((program, index) => (
          <div className="internship-card" key={index}>
            <img src={program.img} alt={program.title} />
            <h3>{program.title}</h3>
            <p>{program.desc}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};
