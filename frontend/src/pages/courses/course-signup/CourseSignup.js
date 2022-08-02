import React from "react";
import "./CourseSignup.css";

const CourseSignup = (props) => {
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
                    Courses are held twice a week on the days and times selected
                    via Google Meet. Classes will also have no more than 4
                    students per teacher to allow for higher quality
                    instruction.&nbsp;
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
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSda_J71fnpkb3jQWArS6R-QWvYj_Ny2rpY8Y28E_D8k1A6opA/viewform?embedded=true"
                height="600"
                frameborder="0"
                className="form"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default CourseSignup;
