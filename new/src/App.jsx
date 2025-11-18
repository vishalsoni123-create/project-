import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Service } from './components/Service';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Project } from './components/Project';
import { Mentorship } from "./components/Mentorship";
import { Why } from "./components/Why";
import { Itsolution } from "./components/Itsolution";
import { Signup } from "./components/Signup";
import { Registrationpanel } from "./Admin/Registrationpanel";
import { Payment } from "./components/Payment";

function AppWrapper() {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/signup", "/admin"];
  const shouldHideLayout = hideLayoutPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Service />
              <Why />
              <Contact />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Project />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/itsolution" element={<Itsolution />} />
        <Route path="/admin/*" element={<Registrationpanel />} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

// ✅ Main App component
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

