import React from "react";
import classes from "./About.module.css";
import Abouut from "../../../shared/assets/Images/About.png";
import ServicesImage from "../../../shared/assets/Images/Services.png";

const About = (props) => {
    return (
        <div id="about" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <h1>ABOUT US</h1>
                        <span>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </span>
                        <a>Explore</a>
                    </div>
                </div>
                <div className={classes.Right}>
                    <img src={Abouut} />
                </div>
            </div>
        </div>
    );
};

export default About;
