import React from "react";
import CoursesBanner from "../../components/CoursesBanner/CoursesBanner";
import Mission from "../mission/Mission";
import { MeetTheTeam } from "../meet-the-team/MeetTheTeam";
import employees from "../../data/Employees";

import "./Home.css";

export const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <CoursesBanner />
            </div>
            <Mission />
            <MeetTheTeam employees={employees} title={"Meet The Team"} />
        </div>
    );
};

export default Home;
