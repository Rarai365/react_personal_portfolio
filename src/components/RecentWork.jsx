import calc from "../assets/calc.png";
import grabGo from "../assets/grab and go.png";
import counterClock from "../assets/counterClock.png";
import TravelBlog from "../assets/TravelBlog.png";
import address from "../assets/address.png";
import ntdl from "../assets/ntdl.png";

const RecentWork = () => {
  return (
    <>
      <section className="   w-75 mx-auto my-5">
        <div className="text-center blog-text mb-4">
          <h2>MY PROJECTS</h2>
          <hr />
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={ntdl}
                className="card-img-top "
                alt="Not to do List"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body img-fluid">
                <h5 className="card-title">Not to do List</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                  <span className="badge bg-info">JavaScript</span>
                </div>
                <p className="card-text">
                  A simple project to track tasks you should avoid doing.
                </p>
                <a
                  href="https://js-ntdl-rrr-s-projects.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={grabGo}
                className="card-img-top"
                alt="Grab & Go"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Grab & Go</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                  <span className="badge bg-info">JavaScript</span>
                </div>
                <p className="card-text">A food ordering app concept.</p>
                <a
                  href="https://convenience-store-azure.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={calc}
                className="card-img-top"
                alt="Calculator"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                  <span className="badge bg-info">JavaScript</span>
                </div>
                <p className="card-text">A simple functional calculator.</p>
                <a
                  href="https://js-prank-calculator.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={counterClock}
                className="card-img-top"
                alt="Counter Clock"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Counter Clock</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                  <span className="badge bg-info">JavaScript</span>
                </div>
                <p className="card-text">
                  A project to display a countdown timer.
                </p>
                <a
                  href="https://js-counter-clock.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={TravelBlog}
                className="card-img-top"
                alt="Travel Blog"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Travel Blog</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                </div>
                <p className="card-text">A travel blog website template.</p>
                <a
                  href="https://rai-blog.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow rounded">
              <img
                src={address}
                className="card-img-top"
                alt="Submit Home Address"
                style={{ height: "25vh", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Submit Home Address</h5>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark">HTML</span>
                  <span className="badge bg-info text-dark">CSS</span>
                  <span className="badge bg-info">JavaScript</span>
                </div>
                <p className="card-text">A simple form to submit addresses.</p>
                <a
                  href="https://js-form-users-input.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentWork;
