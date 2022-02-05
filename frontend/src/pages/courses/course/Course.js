import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

export const Course = (props) => {
    const { title, text, id, image } = props;
    return (
        <div className="course-wrapper">
            <h1 className="title">{title}</h1>
            <img src={image} alt={title} className="course-image" />
            <p className="course-text">{text}</p>
            <Link className="course-button" to={`/course/${id}`}>
                Learn More
            </Link>
        </div>
    );
};
