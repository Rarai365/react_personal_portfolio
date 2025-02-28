import { useState } from "react";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your inquiry has been submitted successfully!");
  };

  return (
    <>
      <footer>
        <div className="contact-me-form">
          <div className="container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Your Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit Inquiry</button>
            </form>

            <div>
              <h5 className="social-links-text">Get In Touch</h5>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://github.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a
                  href="https://www.youtube.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a
                  href="https://www.facebook.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div>
        <center className="center-container">
          &copy; Copyright all rights reserved. Made by RRR.
        </center>
      </div>
    </>
  );
};

export default Footer;
