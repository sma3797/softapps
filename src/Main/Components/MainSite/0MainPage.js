import React, { useEffect, useRef, useState } from "react";
import classes from "./MainPage.module.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Contact from "./Contact";

const PortfolioSection = React.lazy(() => import("../Pages/Portfolio"));
const AboutSection = React.lazy(() => import("../Pages/About"));
const CareerSection = React.lazy(() => import("../Pages/Career"));
const ServicesSection = React.lazy(() => import("../Pages/Services"));

const MainPage = (props) => {
    const { exploreState, exploreFunctionHandler } = props;

    const transformScroll = (event) => {
        // Change Here -> ! -> ''
        if (!exploreState) {
            if (event.deltaY < 0) {
                window.scrollBy(0, -350);
                return;
            }
            window.scrollBy(0, 350);
            event.preventDefault();
            return;
        }
        if (event.deltaY < 0) {
            !exploreState && window.scrollBy(-500, 0);
            return;
        }
        !exploreState && window.scrollBy(500, 0);
        event.preventDefault();
    };
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", transformScroll);

    let content;

    if (!exploreState) {
        content = (
            <div className={classes.MainPage}>
                <Home exploreFunctionHandler={exploreFunctionHandler} />
                <Services exploreFunctionHandler={exploreFunctionHandler} />
                <About exploreFunctionHandler={exploreFunctionHandler} />
                <Portfolio exploreFunctionHandler={exploreFunctionHandler} />
                <Careers exploreFunctionHandler={exploreFunctionHandler} />
                <Contact exploreFunctionHandler={exploreFunctionHandler} />
            </div>
        );
    }

    if (exploreState === "portfolio") {
        content = (
            <div className={classes.MainPage}>
                <PortfolioSection />
            </div>
        );
    }

    if (exploreState === "about") {
        content = (
            <div className={classes.MainPage}>
                <AboutSection />
            </div>
        );
    }

    if (exploreState === "career") {
        content = (
            <div className={classes.MainPage}>
                <CareerSection />
            </div>
        );
    }
    if (exploreState === "services") {
        content = (
            <div className={classes.MainPage}>
                <ServicesSection />
            </div>
        );
    }

    // Change Here
    // return content;

    return (
        <div className={classes.MainPage}>
            <ServicesSection />
        </div>
    );
};

export default MainPage;
