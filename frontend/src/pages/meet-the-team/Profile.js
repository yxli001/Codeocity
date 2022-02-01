import React from "react";
import { FaMehRollingEyes } from "react-icons/fa";
import "./MeetTheTeam.css";

export const Profile = (props) => {
    const { name, image, description, roles, classesProp } = props;
    return (
        <div
            className={`profile-container ${
                classesProp === "" ? "" : classesProp
            }`}
        >
            <div className="profile-data">
                <h1 className="profile-name">{name}</h1>
                <h4>
                    Roles:{" "}
                    {roles.map(
                        (role, index) =>
                            `${role} ${
                                roles.length - 1 === index ? "" : " | "
                            } `
                    )}
                </h4>
                <p className="profile-description">{description}</p>
            </div>
            <img src={image} alt={`About ${name}`} className="profile-image" />
        </div>
    );
};
