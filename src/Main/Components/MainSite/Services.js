import React from "react";
import classes from "./Services.module.css";
import Digital from "../../../shared/assets/Images/Digital.png";
import ServicesImage from "../../../shared/assets/Images/Services.png";

const Services = (props) => {
    return (
        <div id="services" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <p>Our</p>
                        <h1>SERVICES</h1>
                        <span>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </span>
                        <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a>
                    </div>
                </div>
                <div className={classes.Right}>{/* <img src={ServicesImage} /> */}</div>
            </div>
        </div>
    );
};

export default Services;
