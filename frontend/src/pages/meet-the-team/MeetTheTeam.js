import React from "react";
import "./MeetTheTeam.css";
import { Profile } from "./Profile";
import dreamBig from "../../images/dream-big.jpg";

export const MeetTheTeam = () => {
  return (
    <>
      <h1 className="force-center-text">Meet the Team</h1>
      <div className="container-meet-team">
        <Profile
          name="Brian Mason"
          image={dreamBig}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        />
        <Profile
          name="Brian Mason"
          image={dreamBig}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        />
      </div>
    </>
  );
};
