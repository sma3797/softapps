import React, { useEffect, useRef, useState } from "react";
import classes from "./MainPage.module.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Contact from "./Contact";

const PortfolioSection = React.lazy(() => import("../Pages/Portfolio"));

const MainPage = (props) => {
    const { exploreState, exploreFunctionHandler } = props;

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
        console.log("portfolio");
        content = (
            <div className={classes.MainPage}>
                <PortfolioSection />
            </div>
        );
    }

    content = (
        <div className={classes.MainPage}>
            <PortfolioSection />
        </div>
    );

    return content;
};

export default MainPage;
