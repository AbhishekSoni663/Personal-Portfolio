import About from "./Pages/Intro";
import Home from "./Pages/Home";
import Secondnav from "./SecondNavbar/Secondnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import ExperiencePage from "./Pages/ExperiencePage";
import EducationPages from "./Pages/EducationPages";
import SkillPage from "./Pages/SkillPage";
import ProjectPage from "./Pages/ProjectPage";
import JavaScriptPage from "./Pages/JavaScriptPage";
import ReactPages from "./Pages/ReactPages";
import Footer from "./FooterSection/Footer";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <div className="contain" id="up">
        {loading ? (
          <div className="contain-spinner">
            <div className="spinnerContainer">
              <div className="spinner"></div>
              <div className="loader">
                <p>loading</p>
                <div className="words">
                  <span className="word">Home</span>
                  <span className="word">About</span>
                  <span className="word">PortFolio</span>
                  <span className="word">Projects</span>
                  <span className="word">Contact</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Router>
            <Secondnav />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<About />} />
              <Route path="/" element={<AboutMe />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPages />} />
              <Route path="/skill" element={<SkillPage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/javascript" element={<JavaScriptPage />} />
              <Route path="/reactpro" element={<ReactPages />} />
            </Routes>
            <Footer />
            <ToastContainer/>
          
          </Router>
        )}
      </div>
    </>
  );
};

export default App;
