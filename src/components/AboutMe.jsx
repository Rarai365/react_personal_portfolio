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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              fugit, dignissimos, ipsam reprehenderit suscipit voluptatibus quam
              ipsa itaque sunt amet officia magni eaque sint incidunt cumque qui
              inventore ducimus iure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
