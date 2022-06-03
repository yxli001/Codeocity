import React, { useState } from "react";
// import { FaMehRollingEyes } from "react-icons/fa";
import "./MeetTheTeam.css";

export const Profile = (props) => {
    const { name, image, description, roles, classesProp } = props;
    const [expanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded(!expanded);
    };

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
                {description.length > 151 ? (
                    <p className="profile-description">
                        {expanded
                            ? description
                            : description.slice(0, 151) + "..."}
                        <span className="read-more-button" onClick={expand}>
                            {expanded ? "Show Less" : "Show More"}
                        </span>
                    </p>
                ) : (
                    <p className="profile-description">{description}</p>
                )}
            </div>
            <img src={image} alt={`About ${name}`} className="profile-image" />
        </div>
    );
};
