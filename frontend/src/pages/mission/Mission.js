import React from "react";

import "./Mission.css";
import personCoding from "../../images/person-coding.jpg";
import dreamBig from "../../images/dream-big.jpg";

const Mission = () => {
    return (
        <div>
            <div className="mission-container">
                <div className="top">
                    <div className="mission-text-container">
                        <h2 className="mission-text-title">Why Code?</h2>
                        <p className="mission-text-description">
                            One day you can have an idea for a website, app, or
                            game, and the next, you can publish it for anyone
                            around the world to use. Second, coding is one of
                            the highest in-demand skills, with a median wage of
                            around 90k. The upper quartile of this range extends
                            to the hundreds of thousands if you can land a job
                            at one of the top tech companies. Finally, coding
                            teaches you problem-solving skills by forcing you to
                            think logically and analytically. It also builds
                            grit as sitting down and debugging errors is quite
                            tedious.
                        </p>
                    </div>
                    <img className="mission-image" src={personCoding} alt="" />
                </div>
                <div className="bottom">
                    <div className="mission-text-container">
                        <h2 className="mission-text-title">Why Us?</h2>
                        <p className="mission-text-description">
                            We are a team of dedicated high school students who
                            each have at least two years of coding experience.
                            Getting into coding at a young age is the best time
                            to start, but for many, it is difficult to know
                            where to begin and how to structure their learning.
                            That’s where we come in. Our mission is to provide a
                            primer into the coding world as well as to teach
                            students to teach themselves. Each of our lessons
                            will include homework that forces students to do
                            some research on their own which will build on top
                            of what they have learned in class. All of our
                            classes will be held virtually to allow for more
                            flexibility for both the students and teachers.
                        </p>
                    </div>
                    <img
                        className="mission-image second-image"
                        src={dreamBig}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Mission;
