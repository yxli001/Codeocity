import React from "react";
import Navitem from "./Navitem";
import "./Navbar.css";
import { Link } from "react-router-dom";

import navAnimationHandler from "./NavAnimationHandler";
import hideNavbar from "./HideNavbar";
import hide from "./Hide";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo" onClick={hide}>
                <Link to={"/"} className="nav-item">
                    <h4
                        className="link"
                        style={{ color: "rgb(101, 202, 115)" }}
                    >
                        Codeocity
                    </h4>
                </Link>
            </div>
            <ul className="nav-links">
                <li className="link special-link" onClick={hideNavbar}>
                    <Navitem url="/" name="Home" />
                </li>
                <li className="link" onClick={hideNavbar}>
                    <Navitem url="/courses" name="Courses" />
                </li>
                <li className="link" onClick={hideNavbar}>
                    <Navitem url="/apply" name="Jobs" />
                </li>
                <li className="link" onClick={hideNavbar}>
                    <Navitem url="/contact-us" name="Contact Us" />
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
