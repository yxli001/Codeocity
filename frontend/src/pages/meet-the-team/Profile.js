import React from "react";
import "./MeetTheTeam.css";

export const Profile = (props) => {
    const { name, image, description, role, classesProp } = props;
    return (
        <div
            className={`profile-container ${
                classesProp === "" ? "" : classesProp
            }`}
        >
            <div className="profile-data">
                <h1 className="profile-name">{name}</h1>
                <h4>Role: {role}</h4>
                <p className="profile-description">{description}</p>
            </div>
            <img src={image} alt={`About ${name}`} className="profile-image" />
        </div>
    );
};
