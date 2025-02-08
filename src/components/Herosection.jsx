import myResume from "../assets/rajeshrai.pdf";
import profileImage from "../assets/a.png";

const Herosection = () => {
  return (
    <section id="home">
      <div className="grid-container hero-section">
        <div className="intro-text">
          <p>
            Hi, I am <b>Rajesh Rai</b>
          </p>
          <p>
            <b>Soft. Developer</b>
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
  );
};

export default Herosection;
