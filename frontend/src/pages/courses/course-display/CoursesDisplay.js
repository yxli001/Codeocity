import React from "react";
import "./CoursesDisplay.css";
import { Course } from "../course/Course";
import CourseInfo from "../../../data/CourseInfo";

export const CoursesDisplay = () => {
    return (
        <div className="container">
            {CourseInfo.map((course) => {
                return (
                    <Course
                        key={course.id}
                        text={course.description}
                        title={course.title}
                        id={course.id}
                        image={course.image}
                    />
                );
            })}
        </div>
    );
};
