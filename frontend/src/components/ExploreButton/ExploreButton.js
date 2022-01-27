import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreButton.css";

const ExploreButton = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/courses";
    navigate(path);
  };
  return (
    <div>
      <button className="explore-button" onClick={routeChange}>
        Explore
      </button>
    </div>
  );
};

export default ExploreButton;
