import React from "react";
import "./Courses.css";
import { CoursesDisplay } from "../course-display/CoursesDisplay";

const Courses = () => {
    return (
        <>
            <div className="course-container">
                {/* <Banner text="All Courses are 100% free!" /> */}
                <CoursesDisplay />
            </div>
        </>
    );
};

export default Courses;
