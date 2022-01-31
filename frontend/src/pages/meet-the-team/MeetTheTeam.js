import React from "react";
import "./MeetTheTeam.css";
import { Profile } from "./Profile";
import dreamBig from "../../images/dream-big.jpg";
import { Carousel, CarouselItem } from "react-bootstrap/";

export const MeetTheTeam = (props) => {
  const { employees } = props;
  return (
    <>
      <h1 className="force-center-text">Meet the Team</h1>
      <div className="container-meet-team">
        {employees.map((employee) => {
          return (
            <Profile
              key={employee.id}
              name={employee.name}
              image={employee.image}
              role={employee.role}
              description={employee.description}
            />
          );
        })}
      </div>
    </>
  );
};
