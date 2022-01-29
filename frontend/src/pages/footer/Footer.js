import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/contact-us";
    navigate(path);
  };
  return (
    <div className="footer-container">
      <div className="section-1">
        <h2>Codeocity</h2>
        <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
        <FontAwesomeIcon icon={faDiscord} className="footer-icon" />
        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
      </div>

      <div className="section-3">
        <label>Have feedback on the website? We'd love to hear!</label>
        <form>
          <input
            type="text"
            placeholder="Start typing here"
            className="feedback-form"
          />
          <input type="submit" className="feedback-form-submit" />
        </form>
      </div>
      <div className="section section-2">
        <Link to="/" className="custom-nav-item-footer">
          <p>Home</p>
        </Link>
        <Link to="/courses" className="custom-nav-item-footer">
          <p>Courses</p>
        </Link>
        <Link to="/volunteer" className="custom-nav-item-footer">
          <p>Volunteer</p>
        </Link>
        <Link to="/contact-us" className="custom-nav-item-footer">
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};
