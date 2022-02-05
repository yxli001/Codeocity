import React from "react";
import "./Alert.css";

export const Alert = (props) => {
    const { text, type, editState } = props;
    return (
        <div
            className={
                `alert-container-wrapper ` +
                (type === "error" ? "alert-error " : "") +
                (type === "success" ? "alert-success " : "") +
                (type === "warning" ? "alert-warning " : "")
            }
        >
            <div className="y-wrapper">{text}</div>
            <div className="x-wrapper">
                <h2
                    onClick={() => {
                        editState(false);
                    }}
                >
                    X
                </h2>
            </div>
        </div>
    );
};
