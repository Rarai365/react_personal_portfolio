const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex-container navbar-container">
          <div className="flex-container">
            <div className="logo-name">Rajesh</div>
            <p className="line">|</p>
            <p>Soft. Engineer</p>
          </div>

          <ul className="flex-container nav-items">
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

          {/* <!-- hamburger menu on mobile --> */}
          <label for="hamburger-menu">
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburger-menu" />

          {/* <!-- Side-Menu --> */}
          <div className="side-menu">
            <ul className="flex-container side-menu-items">
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
