import React from "react";
import { Link } from "react-router-dom";

import data from "../../data/CourseInfo";
import styles from "./CoursesBanner.module.css";

const CoursesBanner = () => {
    return (
        <section className={styles.courses}>
            <h1 className={styles.adText}>Discover Offered Courses</h1>
            <div className={styles.coursesContainer}>
                {data.map((course, index) => {
                    return (
                        <Link
                            to={`/course/${course.id}`}
                            key={index}
                            className={styles.link}
                        >
                            <div className={styles.course}>
                                <img
                                    src={course.image}
                                    className={styles.courseImage}
                                />
                                <h2 className={styles.courseTitle}>
                                    {course.title}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default CoursesBanner;
