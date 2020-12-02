import Layout from "./Main/Layout/Layout";
import classes from "./App.module.css";
import { isMobile, isTablet } from "react-device-detect";

function App() {
    let content;
    content = <Layout />;
    if (isMobile || isTablet) {
        content = <p>Mobile</p>;
    }
    return <div className={classes.App}>{content}</div>;
}

export default App;
