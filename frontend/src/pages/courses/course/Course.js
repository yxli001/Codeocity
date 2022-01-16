import React from "react";
import "./Course.css";
import website_development from "../../../images/website_development.png";

export const Course = () => {
  return (
    <div className="course-wrapper">
      <h1 className="title">Intro to Website Development</h1>
      <img
        src={website_development}
        alt="Website Development Course"
        className="course-image"
      />
      <p className="course-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu arcu
        sagittis, cursus mi id, facilisis purus. Ut tincidunt lacus id nunc
        malesuada, quis posuere elit lacinia. Fusce sit amet luctus metus. Donec
        vestibulum condimentum mi, nec mollis ligula. Proin varius pretium
        vulputate. Proin sed sodales urna, vitae blandit sapien. Mauris sit amet
        nulla lacus. Suspendisse imperdiet nisl efficitur, auctor lorem et,
        mollis metus.
      </p>
      <button className="course-button">Learn More</button>
    </div>
  );
};
