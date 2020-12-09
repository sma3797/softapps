import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import Logo from "../../../shared/assets/Images/Logo.png.svg";
import Whatsapp from "../../../shared/assets/Images/Whatsapp.png";
import Email from "../../../shared/assets/Images/Email.png";
import Call from "../../../shared/assets/Images/Call.png";

const MainNavigation = (props) => {
    const { exploreFunctionHandler, slideNumber } = props;

    const home = useRef();
    const services = useRef();
    const portfolio = useRef();
    const about = useRef();
    const careers = useRef();
    const contact = useRef();

    const exploreFalseFunctionHandler = (state) => {
        // state.current.click();
        exploreFunctionHandler(state);
    };

    return (
        <MainHeader>
            <div className={classes.MainNavigation}>
                <div className={classes.Logo}>
                    <div style={{ width: "90%" }}>
                        <NavLink onClick={() => exploreFalseFunctionHandler(0)} style={{ cursor: "pointer" }} to={`/`}>
                            <img src={Logo} alt="Logo SoftApps" />
                        </NavLink>
                    </div>
                </div>
                <div className={classes.NavLinks}>
                    <a className={slideNumber === 0 && classes.active} onClick={() => exploreFalseFunctionHandler(0)} ref={home}>
                        Home
                    </a>
                    <a className={slideNumber === 1 && classes.active} onClick={() => exploreFalseFunctionHandler(1)} ref={services}>
                        Services
                    </a>
                    <a className={slideNumber === 2 && classes.active} onClick={() => exploreFalseFunctionHandler(2)} ref={about}>
                        About
                    </a>
                    <a className={slideNumber === 3 && classes.active} onClick={() => exploreFalseFunctionHandler(3)} ref={portfolio}>
                        Portfolio
                    </a>
                    <a className={slideNumber === 4 && classes.active} onClick={() => exploreFalseFunctionHandler(4)} ref={careers}>
                        Careers
                    </a>
                    <a
                        className={(slideNumber === 6 || slideNumber === 5) && classes.active}
                        onClick={() => exploreFalseFunctionHandler(5)}
                        ref={contact}
                    >
                        Contact Us
                    </a>
                </div>
                <div className={classes.RightNavLinks}>
                    <a href="mailto:management@softapps.io">
                        <img src={Email} alt="Email SoftApps" />
                    </a>

                    <a href="tel:+15145503281">
                        <img src={Call} alt="Call SoftApps" />
                    </a>

                    <a target="_blank" href="https://wa.me/+15145503281">
                        <img src={Whatsapp} alt="Whatsapp SoftApps" />
                    </a>
                </div>
            </div>
        </MainHeader>
    );
};

export default MainNavigation;
