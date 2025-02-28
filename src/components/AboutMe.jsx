import profileImage from "../assets/linkden pic.jpg";
import myResume from "../assets/rajeshrai.pdf";

const AboutMe = () => {
  return (
    <>
      <div className="intro-section">
        <div>
          <h2>I am a Full-Stack Developer from Sydney.</h2>
          <p>
            I am a passionate and dedicated junior software developer with a
            strong enthusiasm for creating impactful web and software solutions.
            With hands-on experience in multiple projects, I thrive on
            transforming ideas into functional applications. My portfolio
            showcases my skills in problem-solving, coding, and continuous
            learning as I strive to deliver high-quality, user-friendly software
            experiences.
          </p>
        </div>

        <div>
          <img src={profileImage} alt="" />

          {/* <!-- for resume download --> */}
          <div>
            <a href={myResume} download>
              <center>
                <button className="download-btn">
                  View Resume
                  <i className="fa-solid fa-download"></i>
                </button>
              </center>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
