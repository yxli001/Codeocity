import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section-1">
        <h2>Codeocity</h2>
        <button className="contact-us-footer">Contact Us</button>
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
      <div className="section section-3">
        <p>Socials</p>
      </div>
    </div>
  );
};
