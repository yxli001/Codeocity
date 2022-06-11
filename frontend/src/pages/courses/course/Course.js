import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

export const Course = (props) => {
    const { title, text, id, image, madeFor, length, price } = props;
    return (
        <div className="course-wrapper">
            <img src={image} alt={title} className="course-image" />
            <h1 className="title">{title}</h1>
            <p className="made-for">
                For {madeFor} | {length} classes | ${price}
            </p>
            <p className="course-text">{text}</p>
            {title !== "Coming Soon..." && (
                <Link className="course-button" to={`/course/${id}`}>
                    Learn More
                </Link>
            )}
        </div>
    );
};
