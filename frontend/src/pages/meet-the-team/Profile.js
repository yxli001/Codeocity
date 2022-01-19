import React from "react";
import "./MeetTheTeam.css";

export const Profile = (props) => {
  const { name, image, description } = props;
  return (
    <div className="profile-container">
      <img src={image} alt={`About ${name}`} className="profile-image" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-description">{description}</p>
    </div>
  );
};
