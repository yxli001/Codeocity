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
            <h2 className={styles.center}>Previous customers have said...</h2>
            <p className={styles.text}>
              "Thank you so much! You (and Yixuan) were really great and my son
              said he learned a lot. He's done other coding classes on
              Outschool, but he said yours was better as he got to apply the
              things he learned to one project as opposed to learning new things
              and projects every week which were really overwhelming. Looking
              forward to your fall class! "
            </p>
            <p className={styles.text}>
              "Thanks to Brian and Yixuan for that awesome experience"
            </p>
            {/* <p className={styles.by}>- Codeocity Customers</p> */}
          </div>
          <div className={styles.uniqueText}>
            <h2 className={styles.center}>Why Choose Codeocity?</h2>
            <ul>
              <li className={styles.item}>
                We are a team of passionate, experienced high school students
              </li>
              <li className={styles.item}>
                Our curriculum is structured around having students learn by
                building
              </li>
              <li className={styles.item}>
                We help students learn how to do their own research with online
                resources
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
