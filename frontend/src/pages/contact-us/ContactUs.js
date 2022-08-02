import React from "react";
import { Alert } from "../../components/alerts/Alert";

import "./ContactUs.css";
import contactUs from "../../images/contact-us.jpg";

const ContactUs = () => {
    return (
        <div className="form-container">
            <img src={contactUs} alt="Apply" className="signup-image" />
            <form className="form">
                <h2 className="form-title">Contact Us</h2>
                <h3 className="form-description">
                    Want to schedule a meeting or just ask a question? Reach out
                    to us here!
                </h3>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScn63fEA9Fw1mL7ERMQyPPAHSZC_OXLZMx9XDmb6h99iKDTKw/viewform?embedded=true"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </form>
        </div>
    );
};

export default ContactUs;
