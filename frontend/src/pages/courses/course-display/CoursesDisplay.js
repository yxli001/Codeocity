import React from "react";
import "./CoursesDisplay.css";
import { Course } from "../course/Course";

export const CoursesDisplay = () => {
  return (
    <div className="container">
      <Course />
      <Course />
      <Course />
    </div>
  );
};
