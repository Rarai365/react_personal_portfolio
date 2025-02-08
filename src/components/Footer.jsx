import { Link, Outlet } from "react-router";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-container footer-container">
          <div>
            <h6>Links</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/recentworks">Projects</Link>
              </li>
              <li>
                <Link to="/aboutme">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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

      <Outlet />
    </>
  );
};

export default Footer;
