import React from "react";
import girlWithComputer from "../../images/girl_with_better_computer.png";
import ExploreButton from "../../components/ExploreButton/ExploreButton";
import Mission from "../mission/Mission";
import { MeetTheTeam } from "../meet-the-team/MeetTheTeam";
import employees from "../../data/Employees";

import "./Home.css";

export const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="title-container white-filter">
                    <div className="typed-out-container">
                        <div className="typed-out">Learn to code</div>
                    </div>
                    <ExploreButton />
                </div>
                <img
                    src={girlWithComputer}
                    alt="person"
                    className="person-image"
                />
            </div>
            <Mission />
            <MeetTheTeam employees={employees} title={"Meet The Team"} />
        </div>
    );
};

export default Home;
