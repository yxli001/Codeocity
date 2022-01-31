import React from "react";

import "./Mission.css";
import personCoding from "../../images/person-coding.jpg";
import dreamBig from "../../images/dream-big.jpg";

const Mission = () => {
    return (
        <div>
            <div className="mission-container">
                <div className="top">
                    <div className="mission-text-container">
                        <h2 className="mission-text-title">Learn to code</h2>
                        <p className="mission-text-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum ornare blandit dictum. Pellentesque
                            eu nisl elit. Integer vitae sapien id augue congue
                            commodo. Integer ut tempor ex, at convallis lectus.
                            Nullam diam est, pretium in fringilla porta, cursus
                            ac massa. Mauris sit amet fermentum augue, id tempus
                            mauris. Quisque eget auctor purus. Curabitur a
                            ultrices justo. Quisque tincidunt ultricies
                            porttitor. Maecenas ultricies lorem in justo
                            egestas, porttitor fermentum tellus pulvinar.
                        </p>
                    </div>
                    <img className="mission-image" src={personCoding} alt="" />
                </div>
                <div className="bottom">
                    <div className="mission-text-container">
                        <h2 className="mission-text-title">
                            Turn dreams into reality
                        </h2>
                        <p className="mission-text-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum ornare blandit dictum. Pellentesque
                            eu nisl elit. Integer vitae sapien id augue congue
                            commodo. Integer ut tempor ex, at convallis lectus.
                            Nullam diam est, pretium in fringilla porta, cursus
                            ac massa. Mauris sit amet fermentum augue, id tempus
                            mauris. Quisque eget auctor purus. Curabitur a
                            ultrices justo. Quisque tincidunt ultricies
                            porttitor. Maecenas ultricies lorem in justo
                            egestas, porttitor fermentum tellus pulvinar.
                        </p>
                    </div>
                    <img
                        className="mission-image second-image"
                        src={dreamBig}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Mission;
