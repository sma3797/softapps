import React, { useState } from "react";
import classes from "./Portfolio.module.css";

import PortMobile from "../../../shared/assets/Images/PortMobile.png";
import PortSocial from "../../../shared/assets/Images/PortSocial.png";
import PortWebsite from "../../../shared/assets/Images/PortWebsite.png";
import PortArrow from "../../../shared/assets/Images/PortArrow.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Portfolio = (props) => {
    const [selectedSlide, setSelectedSlide] = useState(0);

    const nextSlide = () => {
        if (selectedSlide === 2) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => (prState += 1));
    };
    const previousSlide = () => {
        if (selectedSlide === 0) {
            setSelectedSlide(2);
            return;
        }
        setSelectedSlide((prState) => (prState -= 1));
    };

    return (
        <div className={classes.Portfolio}>
            <div className={classes.Left}>
                <div className={classes.Arrow}>
                    <img onClick={() => previousSlide()} src={PortArrow} />
                </div>
            </div>
            <div className={classes.Center}>
                <div style={{ width: "100%" }}>
                    <Carousel selectedItem={selectedSlide} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}>
                        <div className={classes.PortfolioSection}>
                            <img src={PortMobile} />
                            <h1>MOBILE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a>Explore</a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img src={PortWebsite} />
                            <h1>WEBSITE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a>Explore</a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img src={PortSocial} />
                            <h1>SOCIAL</h1>
                            <p>{"MEDIA & MARKETING"}</p>
                            <a>Explore</a>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={classes.Right}>
                <div className={classes.Arrow}>
                    <img onClick={() => nextSlide()} src={PortArrow} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
