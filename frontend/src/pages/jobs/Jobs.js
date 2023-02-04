import React from "react";
import { Alert } from "../../components/alerts/Alert";

import "./Jobs.css";
import signup from "../../images/signup.jpeg";

const Volunteer = () => {
  return (
    <div className="page-container-jobs">
      <div className="form-container">
        <img src={signup} alt="Apply" className="signup-image" />
        <div className="form">
          <h2 className="form-title">Apply</h2>
          <h3 className="form-description">
            Want to help people learn to code? Sign up as a teacher.{" "}
            <hr className="hr-jobs" />
            Times are flexible. Minimum 2 hours per week. Salary is $15/hour
          </h3>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe2vtMYDjCuyl0Wx5P1oxKYhuwkgIr46SXHJoCG5Fbc73LPVQ/viewform?embedded=true"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="google-form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
