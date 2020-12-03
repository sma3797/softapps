import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import Logo from "../../../shared/assets/Images/Logo.png.svg";
import Whatsapp from "../../../shared/assets/Images/Whatsapp.png";
import Email from "../../../shared/assets/Images/Email.png";
import Call from "../../../shared/assets/Images/Call.png";

const MainNavigation = (props) => {
    const { exploreFunctionHandler } = props;

    const home = useRef();
    const services = useRef();
    const portfolio = useRef();
    const about = useRef();
    const careers = useRef();
    const contact = useRef();

    const exploreFalseFunctionHandler = (state) => {
        state.current.click();
        exploreFunctionHandler(false);
    };

    return (
        <MainHeader>
            <div className={classes.MainNavigation}>
                <div className={classes.Logo}>
                    <div style={{ width: "80%" }}>
                        <NavLink onClick={() => exploreFalseFunctionHandler(home)} style={{ cursor: "pointer" }} to={`/`}>
                            <img src={Logo} alt="Logo SoftApps" />
                        </NavLink>
                    </div>
                </div>
                <div className={classes.NavLinks}>
                    <a onClick={() => exploreFalseFunctionHandler(home)} ref={home} href={`#home`}>
                        Home
                    </a>
                    <a onClick={() => exploreFalseFunctionHandler(services)} ref={services} href={`#services`}>
                        Services
                    </a>
                    <a onClick={() => exploreFalseFunctionHandler(about)} ref={about} href={`#about`}>
                        About
                    </a>
                    <a onClick={() => exploreFalseFunctionHandler(portfolio)} ref={portfolio} href={`#portfolio`}>
                        Portfolio
                    </a>
                    <a onClick={() => exploreFalseFunctionHandler(careers)} ref={careers} href={`#careers`}>
                        Careers
                    </a>
                    <a onClick={() => exploreFalseFunctionHandler(contact)} ref={contact} href={`#contact`}>
                        Contact Us
                    </a>
                </div>
                <div className={classes.RightNavLinks}>
                    <NavLink to={`/e`}>
                        <img src={Email} alt="Email SoftApps" />
                    </NavLink>

                    <NavLink to={`/c`}>
                        <img src={Call} alt="Call SoftApps" />
                    </NavLink>

                    <NavLink to={`/w`}>
                        <img src={Whatsapp} alt="Whatsapp SoftApps" />
                    </NavLink>
                </div>
            </div>
        </MainHeader>
    );
};

export default MainNavigation;
