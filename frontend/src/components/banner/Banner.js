import React from "react";
import "./Banner.css";
const Banner = (props) => {
  return (
    <div className="banner">
      <h4 id="text">{props.text}</h4>
    </div>
  );
};

export default Banner;
