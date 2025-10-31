
import "./admin.css";

export function  Registration() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>TechHub Admin</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Dashboard</h1>

        <h2>User Data</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vishal Soni</td>
              <td>vishal@example.com</td>
              <td>********</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>********</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
