import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import profileImage from "./assets/a.png";
import projectImage from "./assets/Screenshot 2024-11-30 at 10.10.05 am.png";
import myResume from "./assets/rajeshrai.pdf";

function App() {
  return (
    <>
      {/* <!-- this is for Dark Model Toggle --> */}

      <label className="dark-mode-toggle" for="dark-mode">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>

      <input type="checkbox" id="dark-mode" />

      <div className="wrapper-container">
        <header>
          {/* <!-- This is a navbar --> */}
          <nav>
            <div className="flex-container navbar-container">
              <div className="flex-container">
                <div className="logo-name">Rajesh</div>
                <p className="line">|</p>
                <p>Soft. Engineer</p>
              </div>

              <ul className="flex-container nav-items">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>

              {/* <!-- hamburger menu on mobile --> */}
              <label for="hamburger-menu">
                <i className="fa-solid fa-bars"></i>
              </label>

              <input type="checkbox" id="hamburger-menu" />

              {/* <!-- Side-Menu --> */}
              <div className="side-menu">
                <ul className="flex-container side-menu-items">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#Skills">Skills</a>
                  </li>
                  <li>
                    <a href="#Projects">Projects</a>
                  </li>
                  <li>
                    <a href="#About">About</a>
                  </li>
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* <!-- HERO SECTION --> */}
        <section id="home">
          <div className="grid-container hero-section">
            <div className="intro-text">
              <p>
                Hi, I am <b>Rajesh Rai</b>
              </p>
              <p>
                <b>Soft. Engineer</b>
              </p>
              <br />
              <p>I love Coding!</p>

              <a href={myResume} download>
                <button className="download-btn">
                  Download CV
                  <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
            <div className="profile-image">
              <img src={profileImage} alt="profile-image" />
            </div>
          </div>
        </section>

        {/* <!-- summary-section --> */}
        <section>
          <div className="flex-container summary-section">
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>

              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div>
              <div className="flex-container">
                <i className="fa-solid fa-laptop"></i>

                <div>
                  <span>5+</span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div>
              <div className="flex-container">
                <i className="fa-solid fa-briefcase"></i>

                <div>
                  <span>1+</span>
                  <p>Years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- this is a skills section --> */}

        <section id="skills">
          <center>
            <h2>Skills</h2>
          </center>
          <div className="flex-container skills-container">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>

            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>

            <div>
              <i className="fa-brands fa-js"></i>
              <p>JS</p>
            </div>

            <div>
              <i className="fa-brands fa-square-github"></i>
              <p>GitHub</p>
            </div>

            <div>
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>

        {/* <!-- MY recent work section --> */}

        <section id="projects">
          <center>
            <h2>My Recent Works</h2>
          </center>

          <div className="flex-container">
            {/* <!-- Project 1 --> */}

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

        <section id="about-me" className="about-me-container-1">
          <center>
            <h4>About me</h4>
          </center>
          <div className="test">
            <div className="about-me-image">
              <img src={profileImage} alt="about me image" />
            </div>
            <div className="about-me-text">
              <h4>Rajesh Rai</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                fugit, dignissimos, ipsam reprehenderit suscipit voluptatibus
                quam ipsa itaque sunt amet officia magni eaque sint incidunt
                cumque qui inventore ducimus iure.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- this is get in touch section --> */}

        <section id="contact">
          <center>
            <h4>Get In Touch</h4>
          </center>

          <div className="flex-container get-in-touch-container">
            <a href="facebook.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="github.com">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="youtube.com">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:0452381231">
              <i className="fa-brands fa-mobile"></i>
            </a>
          </div>
        </section>

        <div className="mail-container">
          <center>
            <h5>OR</h5>
          </center>
          <a href="mailto:rajeshbantawarai90@gmail.com">
            <button className="download-btn">
              rajeshbantawarai90@gmail.com{" "}
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </a>
        </div>

        <footer>
          <div className="flex-container footer-container">
            <div>
              <h6>Links</h6>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h6>social links</h6>
              <ul>
                <li>
                  <a href="#">Linkeden</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <center className="center-container">
            &copy; Copy right all reserved. Made by RRR.
          </center>
        </footer>

        {/* <!-- this is a go to top section --> */}

        <div className="go-to-top">
          <a href="#home">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
