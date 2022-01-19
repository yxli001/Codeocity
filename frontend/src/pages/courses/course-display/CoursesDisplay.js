import React from "react";
import "./CoursesDisplay.css";
import { Course } from "../course/Course";

export const CoursesDisplay = () => {
  return (
    <div className="container">
      <Course
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare blandit dictum. Pellentesque eu nisl elit. Integer vitae sapien id augue congue commodo. Integer ut tempor ex, at convallis lectus. Nullam diam est, pretium in fringilla porta, cursus ac massa. Mauris sit amet fermentum augue, id tempus mauris. Quisque eget auctor purus. Curabitur a ultrices justo. Quisque tincidunt ultricies porttitor. Maecenas ultricies lorem in justo egestas, porttitor fermentum tellus pulvinar."
        title="Web Dev Course"
      />
      <Course
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare blandit dictum. Pellentesque eu nisl elit. Integer vitae sapien id augue congue commodo. Integer ut tempor ex, at convallis lectus. Nullam diam est, pretium in fringilla porta, cursus ac massa. Mauris sit amet fermentum augue, id tempus mauris. Quisque eget auctor purus. Curabitur a ultrices justo. Quisque tincidunt ultricies porttitor. Maecenas ultricies lorem in justo egestas, porttitor fermentum tellus pulvinar."
        title="Java Course"
      />
    </div>
  );
};
