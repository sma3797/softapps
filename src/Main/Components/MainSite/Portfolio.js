import React from "react";
import classes from "./Portfolio.module.css";
import PortfolioImage from "../../../shared/assets/Images/Portfolio.png";

const Portfolio = (props) => {
    return (
        <div id="portfolio" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <p>OUR</p>
                        <h1>PORTFOLIO</h1>
                        <span>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </span>
                        <a onClick={() => props.exploreFunctionHandler("portfolio")}>Explore</a>
                    </div>
                </div>
                <div className={classes.Right}>
                    <img src={PortfolioImage} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
