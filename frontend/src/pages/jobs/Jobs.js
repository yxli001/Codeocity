import React, { useState } from "react";
import axios from "axios";
import { Alert } from "../../components/alerts/Alert";
import validator from "validator";

import "./Jobs.css";
import signup from "../../images/signup.jpeg";

const Volunteer = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        skills: "",
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
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

        // console.log(state.email);
        // console.log(validator.isEmail(state.email));

        if (state.firstName === "") {
            setWarning(true);
            return;
        }

        if (state.lastName === "") {
            setWarning(true);
            return;
        }

        if (state.email === "" || !validator.isEmail(state.email)) {
            setWarning(true);
            return;
        }

        if (state.skills === "") {
            setWarning(true);
            return;
        }

        setState({
            firstName: "",
            lastName: "",
            email: "",
            skills: "",
        });

        try {
            setWarning(false);
            setError(false);
            setSuccess(true);

            await axios({
                method: "post",
                url: "http://localhost:5000/volunteer",
                data: {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    skills: state.skills,
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
        <div className="page-container-jobs">
            <div className="form-container">
                <img src={signup} alt="Apply" className="signup-image" />
                <form className="form">
                    <h2 className="form-title">Apply</h2>
                    <h3 className="form-description">
                        Want to help people learn to code? Sign up as a teacher.{" "}
                        <hr className="hr-jobs" />
                        Times are flexible. Minimum 2 hours per week. $15/hour
                    </h3>
                    {warning && (
                        <Alert
                            type="warning"
                            editState={setWarning}
                            text="Please make sure you filled in all fields of the form and a valid email address before submitting. "
                        />
                    )}
                    {success && (
                        <Alert
                            type="success"
                            editState={setSuccess}
                            text="Application sent successfully! We will get back to you within a few days."
                        />
                    )}
                    {error && (
                        <Alert
                            type="error"
                            editState={setError}
                            text="There was an error sending your application, please try again later. "
                        />
                    )}
                    <h3 className="form-description"></h3>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={state.firstName}
                        placeholder="First name"
                        onChange={onChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={state.lastName}
                        placeholder="Last name"
                        onChange={onChangeHandler}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={state.email}
                        placeholder="Email"
                        onChange={onChangeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="skills"
                        id="skills"
                        value={state.skills}
                        placeholder='Skill set - e.g. "HTML, CSS, JS"'
                        onChange={onChangeHandler}
                        required
                    />
                    <button className="signup-submit" onClick={onSubmitHandler}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Volunteer;
