import React, { Suspense, useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import classes from "./Layout.module.css";

const Home = React.lazy(() => import("./../Components/Home/Home"));

// import { Helmet } from "react-helmet";
// <Helmet>
// {/* <meta charSet="utf-8" /> */}
// <title>Snaxa</title>
// </Helmet>

const Layout = (props) => {
    let routes;
    routes = (
        <Switch>
            {/* <Route path="/" exact render={() => <Redirect to={`/${branch}`} />} /> */}
            <Route path="/" exact component={Home} />
        </Switch>
    );
    return (
        <div className={classes.Layout}>
            <div className={classes.Layout__Contaienr}>
                {/* {pathname !== `/${branch}/livechat` && <MainNavigation />} */}
                <Suspense
                    fallback={
                        <div className="center">
                            <LoadingSpinner />
                        </div>
                    }
                >
                    <div>{routes}</div>
                </Suspense>
            </div>
            {/* {pathname !== `/${branch}/livechat` && <Footer />} */}
        </div>
    );
};

export default Layout;
