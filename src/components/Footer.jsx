const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
