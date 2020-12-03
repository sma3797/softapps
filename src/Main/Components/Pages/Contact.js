import React from "react";
import classes from "./Contact.module.css";

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
                        <div className={classes.Form}>
                            <div className={classes.FormElement}>
                                <input placeholder="Name" />
                            </div>
                            <div className={classes.FormElement}>
                                <input placeholder="Email" />
                            </div>
                            <div className={classes.FormElement}>
                                <input placeholder="Subject" />
                            </div>
                            <div className={classes.FormElement}>
                                <textarea placeholder="Type Your Message" />
                            </div>
                            <a>Submit</a>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}></div>
            </div>
        </div>
    );
};

export default Contact;
