
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Service } from './components/Service'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import {Login} from './components/Login'
import {Project} from './components/Project'
import { Mentorship } from "./components/Mentorship";
import { Why } from "./components/Why";
function App() {
  return (
   <Router>
      <Navbar />
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
        <Route path="/project" element={<Project/>} />
        <Route path="/mentorship" element={  <Mentorship />} />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App
