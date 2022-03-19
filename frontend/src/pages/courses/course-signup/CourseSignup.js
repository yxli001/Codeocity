import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { Alert } from "../../../components/alerts/Alert";
import "./CourseSignup.css";
import courseInfo from "../../../data/CourseInfo";

const CourseSignup = (props) => {
    const { cid } = useParams();

    const [state, setState] = useState({
        name: "",
        email: "",
        selectedCourse: courseInfo.find(
            (course) => course.id.toString() === cid
        ),
        selectedCourseTitle: courseInfo.find(
            (course) => course.id.toString() === cid
        ).title,
        selectedTime: "",
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

        if (state.email === "" || !validator.isEmail(state.email)) {
            setWarning(true);
            return;
        }

        setState({
            name: "",
            email: "",
            selectedCourse: courseInfo.find(
                (course) => course.id.toString() === cid
            ),
            selectedCourseTitle: courseInfo.find(
                (course) => course.id.toString() === cid
            ).title,
            selectedTime: "",
        });

        try {
            setWarning(false);
            setError(false);
            setSuccess(true);

            await axios({
                method: "post",
                url: "http://codeocityorg.herokuapp.com/enroll",
                data: JSON.stringify({
                    name: state.name,
                    email: state.email,
                    course: state.selectedCourseTitle,
                    time: state.selectedTime,
                }),
                headers: {
                    "content-type": "text/plain",
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
            <div className="policy">
                <h2 className="payment-methods-h2">Payment Methods</h2>
                <ul className="payment-methods-ul">
                    <li>
                        Venmo
                        <ul>
                            <li>@Sonha-Mason</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <b>Note:</b> Please enter your student[s] name in the note
                    when you are paying. Thanks!
                </p>
                <hr />
                <h2>Policy</h2>
                <p>
                    Courses are held twice a week on the days and times
                    selected. Classes will also have no more than 4 students per
                    teacher to allow for higher quality instruction.&nbsp;
                    <b>
                        Refunds are available up until the course start date and
                        from then on will not be.
                    </b>
                    &nbsp;If for some reason the instructor cannot teach the
                    lesson material in the scheduled time frame, extra classes
                    will be provided at no cost until said material is
                    appropriately taught.
                </p>
                <hr />
                <h2>Course Expectations</h2>
                <p>
                    If a students misses a class, they are expected to read the
                    course slides (always provided at the end of a lesson) and
                    email the instructor if they have any further questions.
                    Homework and a lesson recap will be assigned after each
                    class to ensure that students learn to teach themselves.
                </p>
            </div>
            <form className="form">
                <h2 className="form-title" style={{ marginBottom: "4%" }}>
                    Enroll
                </h2>
                {warning && (
                    <Alert
                        type="warning"
                        editState={setWarning}
                        text="Please make sure you filled in all fields of the form before submitting. "
                    />
                )}
                {success && (
                    <Alert
                        type="success"
                        editState={setSuccess}
                        text="Enrollment sent successfully! We will get back to you within a few days."
                    />
                )}
                {error && (
                    <Alert
                        type="error"
                        editState={setError}
                        text="There was an error sending your enrollment, please try again later. "
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
                <p className="weiufgpfewi">Choose a course: </p>
                <div className="sign-up-checkboxes">
                    <div className="radio">
                        <input
                            type="radio"
                            name="sign-up"
                            id="web-dev-1"
                            value="Web Dev 1"
                            checked={state.selectedCourseTitle === "Web Dev 1"}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    selectedCourse: courseInfo.find(
                                        (course) =>
                                            course.title ===
                                            e.currentTarget.value
                                    ),
                                    selectedCourseTitle: e.currentTarget.value,
                                });
                            }}
                            required={true}
                        />
                        <label htmlFor="web-dev-1">Web Dev 1</label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            name="sign-up"
                            id="web-dev-2"
                            value="Web Dev 2"
                            checked={state.selectedCourseTitle === "Web Dev 2"}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    selectedCourse: courseInfo.find(
                                        (course) =>
                                            course.title ===
                                            e.currentTarget.value
                                    ),
                                    selectedCourseTitle: e.currentTarget.value,
                                });
                            }}
                            required={true}
                        />
                        <label htmlFor="web-dev-2">Web Dev 2</label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            name="sign-up"
                            id="java"
                            value="Java"
                            checked={state.selectedCourseTitle === "Java"}
                            onChange={(e) => {
                                setState({
                                    ...state,
                                    selectedCourse: courseInfo.find(
                                        (course) =>
                                            course.title ===
                                            e.currentTarget.value
                                    ),
                                    selectedCourseTitle: e.currentTarget.value,
                                });
                            }}
                            required={true}
                        />
                        <label htmlFor="java">Java</label>
                    </div>
                </div>
                <div className="times">
                    <p className="weiufgpfewi">Available Times</p>
                    <p className="weiufgpfewi">
                        Classes start on the week of April 4th
                    </p>
                    {state.selectedCourse.times.map((time, key) => {
                        return (
                            <div key={key} className="oihsfsoiffsa">
                                <input
                                    type="radio"
                                    name={key}
                                    id={key}
                                    value={time}
                                    checked={state.selectedTime === time}
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            selectedTime: time,
                                        });
                                    }}
                                    required={true}
                                />
                                <label htmlFor={key}>{time}</label>
                            </div>
                        );
                    })}
                </div>

                <div className="price weiufgpfewi">
                    Price: ${state.selectedCourse.price}
                </div>

                <button className="signup-submit" onClick={onSubmitHandler}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default CourseSignup;
