import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <h1 class="not-found-text">404 - This page doesn't exist.</h1>
            <Link to={"/"} class="not-found-button">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
