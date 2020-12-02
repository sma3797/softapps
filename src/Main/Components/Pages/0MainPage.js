import React, { useEffect, useRef } from "react";
import classes from "./MainPage.module.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Contact from "./Contact";

const MainPage = (props) => {
    const transformScroll = (event) => {
        if (event.deltaY < 0) {
            window.scrollBy(-500, 0);
            return;
        }
        // }
        window.scrollBy(500, 0);
        event.preventDefault();
    };

    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", transformScroll);
    return (
        <div className={classes.MainPage}>
            <Home />
            <Services />
            <About />
            <Portfolio />
            <Careers />
            <Contact />
        </div>
    );
};

export default MainPage;
