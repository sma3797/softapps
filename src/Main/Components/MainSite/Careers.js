import React from "react";
import classes from "./Careers.module.css";
import Careerrs from "../../../shared/assets/Images/Careers.png";
import ServicesImage from "../../../shared/assets/Images/Services.png";

const Careers = (props) => {
    let mainContent = (
        <div className={classes.HomeWidth}>
            <div className={classes.Left}>
                <div className={classes.LeftDiv}>
                    <p>BUILD YOUR</p>
                    <h1>CAREER</h1>
                    <span>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </span>
                    <a onClick={() => props.exploreFunctionHandler("career")}>Apply</a>
                </div>
            </div>
            <div className={classes.Right}>{/* <img src={Careerrs} /> */}</div>
        </div>
    );
    return (
        <div id="careers" className={classes.Home}>
            {mainContent}
        </div>
    );
};

export default Careers;
