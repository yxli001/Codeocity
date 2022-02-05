import { useState } from "react";
import "./MeetTheTeam.css";
import { Profile } from "./Profile";
// import dreamBig from "../../images/dream-big.jpg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const MeetTheTeam = (props) => {
    const { employees } = props;
    const [current, setCurrent] = useState(0);
    const length = employees.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(employees) || employees.length <= 0) {
        return null;
    }

    return (
        <div className="main-container-team">
            <h1 className="force-center-text">{props.title}</h1>
            <div className="container-meet-team">
                {/* Display one at a time. Keep control over this using JS - use state. When changed change state which corresponds to profile*/}
                <div className="carousel-container">
                    <FaArrowAltCircleLeft
                        className="left-arrow"
                        onClick={prevSlide}
                    />
                    <FaArrowAltCircleRight
                        className="right-arrow"
                        onClick={nextSlide}
                    />
                    {employees.map((employee, index) => {
                        return (
                            <Profile
                                key={index}
                                name={employee.name}
                                image={employee.image}
                                roles={employee.roles}
                                description={employee.description}
                                classesProp={
                                    index === current ? "slide active" : "slide"
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
