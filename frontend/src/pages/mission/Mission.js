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
            <h2 className="mission-text-title">Learn to code</h2>
            <p className="mission-text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ornare blandit dictum. Pellentesque eu nisl elit.
              Integer vitae sapien id augue congue commodo. Integer ut tempor
              ex, at convallis lectus. Nullam diam est, pretium in fringilla
              porta, cursus ac massa. Mauris sit amet fermentum augue, id tempus
              mauris. Quisque eget auctor purus. Curabitur a ultrices justo.
              Quisque tincidunt ultricies porttitor. Maecenas ultricies lorem in
              justo egestas, porttitor fermentum tellus pulvinar.
            </p>
          </div>
          <img className="mission-image" src={personCoding} alt="" />
        </div>
        <div className="bottom">
          <div className="mission-text-container">
            <h2 className="mission-text-title">Turn dreams into reality</h2>
            <p className="mission-text-description">
              We are a team of dedicated highschool students that each have at
              least two years of coding experience. Getting into coding at a
              young age is the best time to start, but for many it is difficult
              to know where to begin and how to structure their learning. That’s
              where we come in. Our mission is to provide a primer into the
              coding world as well as to teach students to teach themselves.
              Each of our lessons will include homework that forces students to
              do some research on their own which will build on top of what they
              have learned in class. All of our classes will be held virtually
              to allow for more flexibility for both the students and teachers.
            </p>
          </div>
          <img className="mission-image second-image" src={dreamBig} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
