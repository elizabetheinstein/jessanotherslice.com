import React from "react";
import JessPizza from "./jessPizza";

import "../styles/about.css";

const About = () => {

    return (
        <div id="about">
            <div className="about-container">
                <div className="inner-text">
                    <h1>About</h1>
                    <p>Hi I'm Jess, and I'm a pizza foodie based in NYC! Follow my adventures on
                        <a href="https://www.instagram.com/jessanotherslice/?hl=en">
                            Instagram.
                        </a>
                    </p>
                </div>
                <div className="about-image">
                    <JessPizza />
                </div>
            </div>
        </div>
    )
};

export default About;
