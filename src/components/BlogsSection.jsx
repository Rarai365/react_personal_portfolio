import devto from "../assets/devto.png";
import memorymanagement from "../assets/MemoryManagment.png";
import historyweb from "../assets/historyweb.png";
import calcdoc from "../assets/calcdoc.png";

const BlogsSection = () => {
  return (
    <>
      <section classNameName="blogs-container">
        <div className="blog-text">
          BLOGS
          <hr />
        </div>

        <div className="blog-section">
          <div className="card mb-3" style={{ maxWidth: "50rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={devto}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Blog Website</h5>
                  <p className="card-text">
                    In this blog, we will learn how to build a website and how
                    to host it in GitHub and Deploy it to Vercel.
                  </p>
                  <a
                    href="https://dev.to/rarai365/how-to-build-a-blog-website-using-html-css-and-host-it-in-github-and-deploy-it-to-vercel-4dd6"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: "50rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={historyweb}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">WEB History</h5>
                  <p className="card-text">
                    Learning about the history of the internet was like opening
                    a treasure chest of innovation, collaboration, and
                    creativity.
                  </p>
                  <a
                    href="https://dev.to/rarai365/experience-learning-the-history-of-the-web-155i"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: "50rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={memorymanagement}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Memory Management in JS</h5>
                  <p className="card-text">
                    Understanding how memory management works in JavaScript is
                    crucial to writing efficient and optimized code. In this
                    guide, we’ll break down the key concepts of memory
                    management in a simple and beginner-friendly way.
                  </p>
                  <a
                    href="https://dev.to/rarai365/memory-management-in-javascript-a-beginner-friendly-guide-14ja"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "50rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={calcdoc}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Building a Functional Calculator
                  </h5>
                  <p className="card-text">
                    This blog will walk you through the process of building a
                    functional calculator from designing the user interface (UI)
                    to implementing the core logic. I have used HTML, CSS, and
                    JavaScript to create the app.
                  </p>
                  <a
                    href="https://dev.to/rarai365/building-a-functional-calculator-app-with-html-css-and-javascript-614"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
