import React, { useEffect, useState } from "react";


export function Dashboard(){
  const [contactCount, setContactCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost/techhub/backend/getcontact.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setContactCount(data.data.length);
        }
      })
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);
  useEffect(() => {
    fetch("http://localhost/techhub/backend/getStudent.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStudentCount(data.data.length);
        }
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="card-container">
        <div className="card user-card">
          <div>
            <h2>Total Users</h2>
            <p>{userCount}</p>
          </div>
          <i className="fas fa-user"></i>
        </div>

        <div className="card student-card">
          <div>
            <h2>Total Students</h2>
            <p>{studentCount}</p>
          </div>
          <i className="fas fa-graduation-cap"></i>
        </div>

        <div className="card contact-card">
          <div>
            <h2>Total Contacts</h2>
            <p>{contactCount}</p>
          </div>
          <i className="fas fa-comments"></i>
        </div>

        <div className="card settings-card">
          <div>
            <h2>Settings</h2>
            <p>⚙️</p>
          </div>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </div>
  );
};








