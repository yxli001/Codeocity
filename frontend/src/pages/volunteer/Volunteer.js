import React, { useState } from "react";

import "./Volunteer.css";
import signup from "../../images/signup.jpeg";

const Volunteer = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        skills: "",
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setState({
            firstName: "",
            lastName: "",
            email: "",
            skills: "",
        });
    };

    return (
        <div className="form-container">
            <img src={signup} alt="Sign up" className="signup-image" />
            <form className="form">
                <h2 className="form-title">Sign Up</h2>
                <h3 className="form-description">
                    Want to help people learn to code? Sign up as a teacher.
                </h3>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={state.firstName}
                    placeholder="First name"
                    onChange={onChangeHandler}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={state.lastName}
                    placeholder="Last name"
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
                <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={state.skills}
                    placeholder='Skill set - e.g. "HTML, CSS, JS"'
                    onChange={onChangeHandler}
                />
                <button className="signup-submit" onClick={onSubmitHandler}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Volunteer;
