import React, { Suspense, useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MainNavigation from "../Components/Navigations/MainNavigation";

import classes from "./Layout.module.css";

const MainPage = React.lazy(() => import("../Components/MainSite/0MainPage"));

const Layout = (props) => {
    const [exploreState, setExploreState] = useState(false);

    const exploreFunctionHandler = (state) => {
        console.log("exploreFunctionHandler", state);
        setExploreState(state);
    };

    let routes;
    routes = (
        <Switch>
            <Route
                path="/"
                exact
                render={(props) => <MainPage {...props} exploreState={exploreState} exploreFunctionHandler={exploreFunctionHandler} />}
            />
        </Switch>
    );

    return (
        <div className={classes.Layout}>
            <div className={classes.Layout__Contaienr}>
                <Suspense fallback={<div className="center"></div>}>
                    <MainNavigation exploreFunctionHandler={exploreFunctionHandler} />
                    <div>{routes}</div>
                </Suspense>
            </div>
        </div>
    );
};

export default Layout;
