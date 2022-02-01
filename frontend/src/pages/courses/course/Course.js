import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import website_development from "../../../images/website_development.png";

export const Course = (props) => {
    const { title, text } = props;
    return (
        <div className="course-wrapper">
            <h1 className="title">{title}</h1>
            <img
                src={website_development}
                alt={title}
                className="course-image"
            />
            <p className="course-text">{text}</p>
            <Link className="course-button" to={"/course"}>
                Learn More
            </Link>
        </div>
    );
};
