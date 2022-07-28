import React from "react";
import "./FormDownBanner.css";

const FormDownBanner = () => {
    return (
        <div className="form-down-banner-container">
            <h1 className="form-down-banner-text">
                Our forms are down at the moment, please email us directly at{" "}
                <span className="form-down-banner-text-highlight">
                    contact@codeocity.org
                </span>{" "}
                for course sign ups or other questions.{" "}
            </h1>
        </div>
    );
};

export default FormDownBanner;
