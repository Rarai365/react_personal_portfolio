import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header flex">
          <div className="logo flex">
            <div>RAJESH</div>
            <div className="line">Developer</div>
          </div>
          <label for="hamburgerMenu">
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburgerMenu" />

          <div className="menu">
            {/* <ul className="flex navigation">
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul> */}

            <ul className="flex navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
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
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
