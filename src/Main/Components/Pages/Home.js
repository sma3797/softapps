import React from "react";
import classes from "./Home.module.css";
import Digital from "../../../shared/assets/Images/Digital.png";
import Play from "../../../shared/assets/Images/Play.png";

const Home = (props) => {
    return (
        <div id="home" className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <h1>Digitalization</h1>
                        <p>MAKE YOUR FUTURE DIGITAL</p>
                        <span>
                            SoftApps.io is a Canadian-based sofware development company, with branches extended to the US and Pakistan. We
                            are a complete cycle application development company.
                        </span>
                        <div style={{ height: "90px" }}>
                            <div style={{ position: "relative", cursor: "pointer" }}>
                                <a>Explore</a>
                                <img src={Play} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <img src={Digital} />
                </div>
            </div>
        </div>
    );
};

export default Home;
