import React from "react";

import styles from "./Mission.module.css";
const Mission = () => {
    // We are a team of dedicated high school students
    //                                 who each have at least two years of coding
    //                                 experience. Getting into coding at a young age
    //                                 is the best time to start, but for many, it is
    //                                 difficult to know where to begin and how to
    //                                 structure their learning. That’s where we come
    //                                 in. Our mission is to provide an introduction
    //                                 into the coding world as well as to teach
    //                                 students to teach themselves. Each of our
    //                                 lessons will include homework that forces
    //                                 students to do some research on their own which
    //                                 will build on top of what they have learned in
    //                                 class. All of our classes will be held virtually
    //                                 to allow for more flexibility for both the
    //                                 students and teachers.

    return (
        <div className={styles.pageContainer}>
            <div className={styles.missionContainer}>
                <div className={styles.container}>
                    <div className={styles.adText}>
                        <h2 className={styles.center}>
                            Our Experience With Programming
                        </h2>
                        <p className={styles.text}>
                            "I began to learn programming in fifth grade through
                            an online course. At first I was motivated by
                            wanting to build an ecommerce website. At the time,
                            I was really into gardening and wanted to create a
                            website where I could sell my vegetables.
                            Programming turned into an outlet for my creativity.
                            Today, knowing how to code has allowed me to build
                            whatever company ideas I have (perhaps too many)
                            which is why we created Codeocity. We wanted to
                            spread our passion to other people, so they can
                            enjoy this skill as much as we do."
                            <div className={styles.by}>-Brian Mason</div>
                        </p>
                    </div>
                    <div className={styles.uniqueText}>
                        <h2 className={styles.center}>Why Choose Codeocity?</h2>
                        <ul>
                            <li className={styles.item}>
                                We are a team of passionate, experienced high
                                school students
                            </li>
                            <li className={styles.item}>
                                Our curriculum is structured around having learn
                                by building
                            </li>
                            <li className={styles.item}>
                                We help them learn how to do their own research
                                with online resources
                            </li>
                            <li className={styles.item}>
                                Fully virtual classes to allow for flexibility
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
