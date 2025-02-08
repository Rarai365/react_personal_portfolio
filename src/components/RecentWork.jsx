import projectImage from "../assets/Screenshot 2024-11-30 at 10.10.05 am.png";

const RecentWork = () => {
  return (
    <>
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
    </>
  );
};

export default RecentWork;
