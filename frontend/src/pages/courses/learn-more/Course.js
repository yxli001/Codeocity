import React from "react";
import "./Course.css";
import { MeetTheTeam } from "../../meet-the-team/MeetTheTeam";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";

export const Course = (props) => {
    const { cid } = useParams();

    return (
        <div className="course-learn-more-wrapper">
            <div className="course-specific-banner">
                <div className="course-specific-data-container">
                    <h1 className="course-specific-title">{props.title}</h1>
                    <p className="course-specific-description">
                        {props.description}
                        <br />
                        <b
                            style={{
                                display: "block",
                                fontWeight: "600",
                                margin: "1rem",
                            }}
                        >
                            Class size will be no more than four students
                            <br />
                            {props.numClasses} online classes, twice a week.{" "}
                            <br />
                            Cost: ${props.price} - $25/hour
                        </b>
                        <Link
                            to={`/course/signup/${cid}`}
                            className="enroll-link btn-enroll"
                        >
                            Enroll
                        </Link>
                    </p>
                </div>
                <div className="video-container-learn-more">
                    {/* <iframe
                        width="560"
                        height="315"
                        src={props.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}
                    <ReactPlayer
                        url={props.video}
                        controls={true}
                        width="100%"
                        height="100%"
                        style={{ margin: "1rem auto" }}
                    />
                </div>
            </div>
            <div className="course-content-teachers-wrapper">
                <div className="course-content-container-learn-more">
                    <h2 className="what-you-learn">What you'll learn</h2>
                    <ul className="course-content">
                        {props.content.map((item, counter) => {
                            return (
                                <div key={counter}>
                                    <li className="course-content-item">
                                        &#10003;&nbsp;&nbsp; {item}
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div className="teachers-container">
                    <MeetTheTeam
                        employees={props.teachers}
                        title="Meet Your Instructors"
                    />
                </div>
            </div>
        </div>
    );
};

//Teachers - Reuse meet the team carousel
//Price
//Brief description
//Overview of curriculum
//Project by student after completing course
//Projects showcase - Get people to build as a hiring requirement
//Add video preview
