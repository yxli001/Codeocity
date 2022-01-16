import React from "react";
import Navitem from "./Navitem";
import NavLogo from "./NavLogo";
import "./Navbar.css";
import navAnimationHandler from "./NavAnimationHandler";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLogo url="/" name="Codeocity" />{" "}
      </div>
      <ul className="nav-links">
        <li>
          <Navitem url="/" name="Home" />
        </li>
        <li>
          <Navitem url="/mission" name="Mission" />
        </li>
        <li>
          <Navitem url="/courses" name="Courses" />
        </li>
        <li>
          <Navitem url="/volunteer" name="Volunteer" />
        </li>
        <li>
          <Navitem url="/contactus" name="Contact Us" />
        </li>
      </ul>
      <div className="burger" onClick={navAnimationHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
