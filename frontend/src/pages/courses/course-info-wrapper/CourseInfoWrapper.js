import React from "react";
import { useParams } from "react-router-dom";
import { Course } from "../learn-more/Course";
import courses from "../../../data/CourseInfo";

const CourseInfoWrapper = () => {
    const { cid } = useParams();
    const course = courses.find((course) => course.id.toString() === cid);

    return (
        <div>
            <Course
                id={cid}
                description={course.description}
                title={course.title}
                content={course.content}
                image={course.image}
                teachers={course.teachers}
                video={course.video}
                price={course.price}
                numClasses={course.numClasses}
                times={course.times}
            />
        </div>
    );
};

export default CourseInfoWrapper;
