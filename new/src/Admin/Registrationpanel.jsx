
import "./admin.css";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Students } from "./Students";
import { Settings } from "./Settings";
import { ContactPanel } from "./ContactPanel";
export function Registrationpanel() {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>TechHub Admin</h2>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/students">Students</Link></li>
           <li><Link to="/admin/contactpanel">Contact Panel</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
        </ul>
      </aside>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="contactpanel" element={<ContactPanel />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
    
    </div>
  );
}
