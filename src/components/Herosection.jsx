import profileImage from "../assets/linkden pic.jpg";

const Herosection = () => {
  return (
    <div className="container2">
      <div className="test">
        <div className="profile-section">
          <img
            src={profileImage}
            alt="Rajesh Rai Profile"
            className="profile-image"
          />
        </div>
        <div className="text-section">
          <p>Hello 👋 I'm</p>
          <section className="animation">
            <div className="first">
              <div>Rajesh Rai</div>
            </div>
            <div className="third">
              <div>A Programmer</div>
            </div>
            <div className="second">
              <div>A Web Developer</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
