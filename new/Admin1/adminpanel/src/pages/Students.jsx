import { useState, useEffect } from "react";
export function Students() {
  const [students, setStudents] = useState([]);
  const [btn, setBtn] = useState(true);
  const [active, setActive] = useState(true);

  // Fetch data from backend (PHP)
  useEffect(() => {
    fetch("http://localhost/techhub/backend/getStudent.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStudents(data.data);
        } else {
          alert("No data found");
        }
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <main className="main-content">
      <h2>Students Data</h2>

      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>City</th>
            <th>State</th>
            <th>Password</th>
            <th>Branch</th>
            <th>Actions</th>
            <th>Active/Inactive</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.NAME}</td>
              <td>{s.email}</td>
              <td>{s.mobile}</td>
              <td>{s.city}</td>
              <td>{s.state}</td>
              <td>{s.PASSWORD}</td>
              <td>{s.branch}</td>
              <td>
                <button
                  onClick={() => alert(`Edit: ${s.name}`)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => alert(`Delete: ${s.name}`)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => setActive(!active)}
                  className={btn ? "edit-btn" : "delete-btn"}
                >
                  {active ? "Active" : "Inactive"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
