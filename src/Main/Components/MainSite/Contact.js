import React from "react";
import classes from "./Contact.module.css";

import { useHttpClient } from "../../../shared/hooks/http-hook";

const Contact = (props) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const submitContactFormHandler = async () => {
        console.log("submitContactFormHandler", process.env.REACT_APP_BACKEND_URL);
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/check`,
                // "POST",
                // {
                //     "Content-Type": "application/json",
                // },
                // JSON.stringify({}),
                // // data,
            );
            console.log("responseData", responseData);
        } catch (error) {}
    };
    error && console.log("error", error);

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
                            <a onClick={() => submitContactFormHandler()}>Submit</a>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}></div>
            </div>
        </div>
    );
};

export default Contact;
