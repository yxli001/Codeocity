import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import { Alert } from "../../components/alerts/Alert";

import "./ContactUs.css";
import contactUs from "../../images/contact-us.jpg";

const ContactUs = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (state.name === "") {
            setWarning(true);
            return;
        }

        if (state.message === "") {
            setWarning(true);
            return;
        }

        if (state.email === "" || !validator.isEmail(state.email)) {
            setWarning(true);
            return;
        }

        setState({
            name: "",
            email: "",
            message: "",
        });

        try {
            setWarning(false);
            setError(false);
            setSuccess(true);

            await axios({
                method: "post",
                url: "http://codeocityorg.herokuapp.com/contact-us",
                data: {
                    name: state.name,
                    email: state.email,
                    message: state.message,
                },
                headers: {
                    "content-type": "application/json",
                },
            });
        } catch (error) {
            console.log(error);
            setWarning(false);
            setSuccess(false);
            setError(true);
        }
    };

    return (
        <div className="form-container">
            <img src={contactUs} alt="Apply" className="signup-image" />
            <form className="form">
                <h2 className="form-title">Contact Us</h2>
                <h3 className="form-description">
                    Want to schedule a meeting or just ask a question? Reach out
                    to us here!
                </h3>
                {warning && (
                    <Alert
                        type="warning"
                        editState={setWarning}
                        text="Please make sure you filled in all fields of the form as well as a valid email address before submitting. "
                    />
                )}
                {success && (
                    <Alert
                        type="success"
                        editState={setSuccess}
                        text="Message sent successfully! We will get back to you within a few days."
                    />
                )}
                {error && (
                    <Alert
                        type="error"
                        editState={setError}
                        text="There was an error sending your application, please try again later. "
                    />
                )}
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
