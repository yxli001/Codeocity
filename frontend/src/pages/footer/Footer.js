import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./Footer.css";

export const Footer = () => {
    const [feedback, setFeedback] = useState("");
    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = "/contact-us";
    //     navigate(path);
    // };

    const feedbackFormSubmitHandler = async (e) => {
        e.preventDefault();

        setFeedback("");

        await axios({
            method: "post",
            url: "http://codeocityorg.herokuapp.com/feedback",
            data: {
                feedback,
            },
            headers: {
                "content-type": "application/json",
            },
        });
    };

    return (
        <div className="footer-container">
            <div className="section-1">
                <h2>Codeocity</h2>
                <a
                    href="https://www.instagram.com/codeocity/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-links"
                >
                    <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="footer-icon"
                    />
                </a>
                <a
                    href="https://discord.gg/uYrB642Cqz"
                    target="_blank"
                    rel="noreferrer"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faDiscord} className="footer-icon" />
                </a>
                <a
                    href="https://www.facebook.com/codeocity"
                    target="_blank"
                    rel="noreferrer"
                    className="social-links"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="footer-icon"
                    />
                </a>
            </div>

            <div className="section-3">
                <label>Have feedback for the website? We'd love to hear!</label>
                <form onSubmit={feedbackFormSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Start typing here"
                        className="feedback-form"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                    <input type="submit" className="feedback-form-submit" />
                </form>
            </div>
            <div className="section section-2">
                <Link to="/" className="custom-nav-item-footer">
                    <p>Home</p>
                </Link>
                <Link to="/courses" className="custom-nav-item-footer">
                    <p>Courses</p>
                </Link>
                <Link to="/apply" className="custom-nav-item-footer">
                    <p>Jobs</p>
                </Link>
                <Link to="/contact-us" className="custom-nav-item-footer">
                    <p>Contact Us</p>
                </Link>
            </div>
        </div>
    );
};
