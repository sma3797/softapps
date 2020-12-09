import React, { useEffect } from "react";
import Layout from "./Main/Layout/Layout";
import classes from "./App.module.css";
import { isMobile, isTablet } from "react-device-detect";
import { useSlide } from "./shared/hooks/slide-hook";
import { SlideContext } from "./shared/context/slide-context";

function App() {
    const { exploreState, setExploreStateHandler, setSlideNumberHandler, slideNumber } = useSlide();

    useEffect(() => {
        localStorage.setItem("slideNumber", 0);
        localStorage.setItem("exploreState", undefined);
    }, []);

    let content;
    content = (
        <SlideContext.Provider value={{ exploreState, setExploreStateHandler, setSlideNumberHandler, slideNumber }}>
            <Layout />
        </SlideContext.Provider>
    );
    // if (isMobile || isTablet) {
    //     content = <p>Mobile</p>;
    // }
    return <div className={classes.App}>{content}</div>;
}

export default App;
