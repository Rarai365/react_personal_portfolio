import profileImage from "../assets/a.png";

const AboutMe = () => {
  return (
    <>
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
              I am a passionate and dedicated junior software developer with a
              strong enthusiasm for creating impactful web and software
              solutions. With hands-on experience in multiple projects, I thrive
              on transforming ideas into functional applications. My portfolio
              showcases my skills in problem-solving, coding, and continuous
              learning as I strive to deliver high-quality, user-friendly
              software experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
