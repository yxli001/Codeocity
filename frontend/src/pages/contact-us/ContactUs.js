import React, { useState } from "react";
import axios from "axios";

import "./ContactUs.css";
import contactUs from "../../images/contact-us.jpg";

const ContactUs = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        setState({
            name: "",
            email: "",
            message: "",
        });

        await axios({
            method: "post",
            url: "http://localhost:5000/contact-us",
            data: {
                name: state.name,
                email: state.email,
                message: state.message,
            },
            headers: {
                "content-type": "application/json",
            },
        });
    };

    return (
        <div className="form-container">
            <img src={contactUs} alt="Apply" className="signup-image" />
            <form className="form">
                <h2 className="form-title">Contact Us</h2>
                <h3 className="form-description">
                    Reach out to us with this quick form
                </h3>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={state.name}
                    placeholder="Name"
                    onChange={onChangeHandler}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={state.email}
                    placeholder="Email"
                    onChange={onChangeHandler}
                />
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={state.message}
                    placeholder="Message to us..."
                    onChange={onChangeHandler}
                />
                <button className="signup-submit" onClick={onSubmitHandler}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
