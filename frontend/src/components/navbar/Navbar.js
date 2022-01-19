import React from "react";
import Navitem from "./Navitem";
import NavLogo from "./NavLogo";
import "./Navbar.css";
import navAnimationHandler from "./NavAnimationHandler";
import hideNavbar from "./HideNavbar";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={hideNavbar}>
        <NavLogo url="/" name="Codeocity" />{" "}
      </div>
      <ul className="nav-links">
        <li className="link" onClick={hideNavbar}>
          <Navitem url="/" name="Home" />
        </li>
        <li className="link" onClick={hideNavbar}>
          <Navitem url="/mission" name="Mission" onClick={hideNavbar} />
        </li>
        <li className="link" onClick={hideNavbar}>
          <Navitem url="/courses" name="Courses" />
        </li>
        <li className="link" onClick={hideNavbar}>
          <Navitem url="/volunteer" name="Volunteer" />
        </li>
        <li className="link" onClick={hideNavbar}>
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
