import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="flex-container navbar-container">
            <div className="flex-container">
              <div className="logo-name">Rajesh</div>
              <p className="line">|</p>
              <p>Soft. Developer</p>
            </div>

            <ul className="flex-container nav-items">
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

            {/* <!-- hamburger menu on mobile --> */}
            <label htmlFor="hamburger-menu">
              <i className="fa-solid fa-bars"></i>
            </label>

            <input type="checkbox" id="hamburger-menu" />

            {/* <!-- Side-Menu --> */}
            <div className="side-menu">
              <ul className="flex-container side-menu-items">
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
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
