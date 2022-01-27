import React from "react";
import person from "../../images/person.png";
import ExploreButton from "../../components/ExploreButton/ExploreButton";
import { Footer } from "../footer/Footer";
import Mission from "../mission/Mission";
import { MeetTheTeam } from "../meet-the-team/MeetTheTeam";

import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="title-container">
          <div className="typed-out-container">
            <div className="typed-out">Learn to code</div>
          </div>
          <ExploreButton />
        </div>
        <img src={person} alt="person" className="person-image" />
      </div>
      <Mission />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default Home;
