import React from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import Logo from "../../../shared/assets/Images/Logo.png.svg";
import Whatsapp from "../../../shared/assets/Images/Whatsapp.png";
import Email from "../../../shared/assets/Images/Email.png";
import Call from "../../../shared/assets/Images/Call.png";

const MainNavigation = (props) => {
    return (
        <MainHeader>
            <div className={classes.MainNavigation}>
                <div className={classes.Logo}>
                    <div style={{ width: "80%" }}>
                        <NavLink style={{ cursor: "pointer" }} to={`/`}>
                            <img src={Logo} alt="Logo SoftApps" />
                        </NavLink>
                    </div>
                </div>
                <div className={classes.NavLinks}>
                    <NavLink activeClassName={classes.active} exact to={`/`}>
                        Home
                    </NavLink>
                    <NavLink to={`/services`}>Services</NavLink>
                    <NavLink to={`/portfolio`}>Portfolio</NavLink>
                    <NavLink to={`/about`}>About Us</NavLink>
                    <NavLink to={`/career`}>Career</NavLink>
                    <NavLink to={`/contact`}>Contact Us</NavLink>
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
