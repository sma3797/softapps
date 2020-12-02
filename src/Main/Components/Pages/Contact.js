import React from "react";
import classes from "./Contact.module.css";
import Digital from "../../../shared/assets/Images/Digital.png";
import ServicesImage from "../../../shared/assets/Images/Services.png";

const Contact = (props) => {
    return (
        <div id="contact" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <h1>
                            Contact <span style={{ color: "black" }}>Us!</span>
                        </h1>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </p>
                        <a>Apply</a>
                    </div>
                </div>
                <div className={classes.Right}>{/* <img src={ServicesImage} /> */}</div>
            </div>
        </div>
    );
};

export default Contact;
