import React from "react";
import Navitem from "./Navitem";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Navitem url="/" name="Dream To Build" />
      </div>
      <ul>
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
        <li>
          <Navitem url="/donations" name="Donations" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
