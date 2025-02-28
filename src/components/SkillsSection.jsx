const SkillsSection = () => {
  return (
    <>
      <section id="skills">
        <center>
          <h2 className="skills-text">Skills</h2>
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
          <div>
            <i className="fa-brands fa-react"></i>
            <p>React</p>
          </div>

          <div>
            <i className="fa-brands fa-node-js"></i>
            <p>Node JS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
