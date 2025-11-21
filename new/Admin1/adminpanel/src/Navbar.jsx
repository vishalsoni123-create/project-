import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/contactpanel">Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}
