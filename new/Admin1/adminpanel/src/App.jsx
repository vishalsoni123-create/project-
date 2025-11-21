import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import {Dashboard} from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ContactPanel from "./pages/ContactPanel";
import { Students } from "./pages/Students";

import "./App.css";

// ✅ Private Route — restrict access to logged-in users only
function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/pages/login" />;
}

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      {/* ✅ Show Navbar only after login */}
      {isLoggedIn && <Navbar />}

      <div className="page-container">
        <Routes>
       
       

          {/* ✅ Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/contactpanel"
            element={
              <PrivateRoute>
                <ContactPanel />
              </PrivateRoute>
            }
          />

          <Route
            path="/students"
            element={
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            }
          />

          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* ✅ Redirect unknown URLs */}
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;




