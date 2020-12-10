import Layout from "./Main/Layout/Layout";
import LayoutMobTab from "./Main/Layout/Layout2";
import classes from "./App.module.css";
import { isMobile, isTablet } from "react-device-detect";
import { useSlide } from "./shared/hooks/slide-hook";
import { SlideContext } from "./shared/context/slide-context";
import React, { useEffect } from "react";

function App() {
    let content;
    content = <Layout />;

    if (isMobile || isTablet) {
        content = <LayoutMobTab />;
    }
    return <div className={classes.App}>{content}</div>;
}

export default App;
