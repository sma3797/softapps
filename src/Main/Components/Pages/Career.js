import React, { useState } from "react";
import classes from "./Career.module.css";

import cvLogo from "../../../shared/assets/Images/cvLogo.png";

const Career = (props) => {
    const [file, setFile] = useState(undefined);

    return (
        <div className={classes.Career}>
            <h2>APPLY ONLINE</h2>
            <div className={classes.Form}>
                <div className={classes.FormContainer}>
                    <div className={classes.Left}>
                        <div className={classes.FormElement}>
                            <input placeholder="First Name" />
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Last Name" />
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Email" />
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Phone" />
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Current Employment" />
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Experience" />
                        </div>
                    </div>
                    <div className={classes.Right}>
                        <div className={classes.FormElement}>
                            <textarea rows={6} placeholder="Cover Letter" />
                        </div>
                        <input
                            // accept="application/pdf, application/doc ,application/docx ,application/xls, application/xlsx,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                            id="file"
                            placeholder="Experience"
                        />
                        <label className={classes.CVFormElement} for="file">
                            <div>
                                <img src={cvLogo} />
                            </div>
                            {file ? <p>{file.name}</p> : <p>Upload Your CV</p>}
                        </label>
                    </div>
                </div>
                <a>Submit</a>
            </div>
        </div>
    );
};

export default Career;
