import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import profileImage from "./assets/a.png";
import projectImage from "./assets/Screenshot 2024-11-30 at 10.10.05 am.png";
import myResume from "./assets/rajeshrai.pdf";
import SkillsSection from "./components/SkillsSection";
import SummarySection from "./components/SummarySection";
import Herosection from "./components/Herosection";
import RecentWork from "./components/RecentWork";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import MailToMe from "./components/MailToMe";
import GoToTop from "./components/GoToTop";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- this is for Dark Model Toggle --> */}

      <DarkMode />

      <div className="wrapper-container">
        {/* <!-- This is a navbar --> */}
        <Navbar />

        {/* <!-- HERO SECTION --> */}

        <Herosection />

        {/* <!-- summary-section --> */}

        <SummarySection />

        {/* <!-- this is a skills section --> */}

        <SkillsSection />

        {/* <!-- MY recent work section --> */}

        <section id="projects">
          <center>
            <h2>My Recent Works</h2>
          </center>

          <div className="flex-container">
            {/* <!-- Project 1 --> */}

            <RecentWork />

            {/* <!-- Project 2 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 3 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 4 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 5 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 6 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 7 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>

            {/* <!-- Project 8 --> */}

            <div className="project-card">
              <div className="card-image">
                <img src={projectImage} alt="project-img" />
              </div>

              <div className="card-icon">
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | css</p>
              </div>
            </div>
          </div>
        </section>

        <AboutMe />

        {/* <!-- this is get in touch section --> */}

        <GetInTouch />

        <MailToMe />

        <Footer />

        {/* <!-- this is a go to top section --> */}

        <GoToTop />
      </div>
    </>
  );
}

export default App;
