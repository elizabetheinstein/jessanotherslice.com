import React from "react";
import JessPizza from "./jessPizza";
import Instagram from "../components/instagram";

const About = () => {

    return (
        <div className="main">
            <div className="about">
                <h1>About</h1>
                <p>Hi I'm Jess, and I'm a pizza foodie based in NYC! Follow my adventures on
                    <a href="https://www.instagram.com/jessanotherslice/?hl=en">
                        <div className="instagram">
                            <Instagram />
                        </div>
                    </a>
                </p>
                {/* Contact Form */}
            </div>
            <div className="jess-pizza">
                <JessPizza />
            </div>
        </div>
    )
};

export default About;
