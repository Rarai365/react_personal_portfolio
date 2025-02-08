import projectImage from "../assets/Screenshot 2024-11-30 at 10.10.05 am.png";

const RecentWork = () => {
  return (
    <>
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
    </>
  );
};

export default RecentWork;
