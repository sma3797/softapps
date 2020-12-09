import React, { useEffect, useRef, useState } from "react";
import classes from "./Portfolio.module.css";

import PortMobile from "../../../shared/assets/Images/PortMobile.png";
import PortSocial from "../../../shared/assets/Images/PortSocial.png";
import PortWebsite from "../../../shared/assets/Images/PortWebsite.png";
import rightArrow from "../../../shared/assets/Images/rightArrow.png";
import leftArrow from "../../../shared/assets/Images/leftArrow.png";

import snaxa1 from "../../../shared/assets/Images/snaxa1.png";
import snaxa2 from "../../../shared/assets/Images/snaxa2.png";
import snaxa3 from "../../../shared/assets/Images/snaxa3.png";

import PortfolioGrid from "../../../shared/components/UIElements/PortfolioGrid";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FullPage, Slide } from "react-full-page";

const Portfolio = (props) => {
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [selectedPortfolio, setSelectedPortfolio] = useState(0);
    const [portfolioMode, setPortfolioMode] = useState(false);
    const [resetAlert, setResetAlert] = useState(false);

    const mobile = useRef();
    const website = useRef();
    const social = useRef();

    const nextSlide = () => {
        setPortfolioMode(false);
        if (selectedSlide === 2) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => (prState += 1));
    };
    const previousSlide = () => {
        setPortfolioMode(false);
        if (selectedSlide === 0) {
            setSelectedSlide(2);
            return;
        }
        setSelectedSlide((prState) => (prState -= 1));
    };
    const portfolioModeHandler = (state, mode) => {
        console.log("portfolioModeHandler", mode);
        document.scrollingElement.scroll();
        setSelectedPortfolio(1);
        setPortfolioMode(mode);
        state.current.click();
        window.scrollBy(500, 500);
    };

    // element.addEventListener("wheel", transformScroll);

    useEffect(() => {}, []);

    // const transformScroll = (event) => {
    //     console.log("Event");
    //     if (event.deltaY < 0) {
    //         if (resetAlert) {
    //             console.log("asd");
    //             setPortfolioMode(false);
    //         }
    //     }
    //     event.preventDefault();
    // };

    // var element = document.scrollingElement || document.documentElement;
    // element.addEventListener("wheel", transformScroll);

    // console.log("resetAlert", resetAlert);

    let mainCarousel = (
        <div className={classes.Portfolio}>
            <div className={classes.Left}>
                <div className={classes.Arrow}>
                    <img onClick={() => previousSlide()} src={leftArrow} />
                </div>
            </div>
            <div className={classes.Center}>
                <div style={{ width: "100%" }}>
                    <Carousel  selectedItem={selectedSlide} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}>
                        <div className={classes.PortfolioSection}>
                            <img src={PortMobile} />
                            <h1>MOBILE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a href="#mobile" ref={mobile} onClick={() => portfolioModeHandler(mobile, "mobile")}>
                                Explore
                            </a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img src={PortWebsite} />
                            <h1>WEBSITE</h1>
                            <p>{"DESIGN & DEVELOPMENT"}</p>
                            <a href="#website" ref={website} onClick={() => portfolioModeHandler(website, "website")}>
                                Explore
                            </a>
                        </div>
                        <div className={classes.PortfolioSection}>
                            <img src={PortSocial} />
                            <h1>SOCIAL</h1>
                            <p>{"MEDIA & MARKETING"}</p>
                            <a href="#social" ref={social} onClick={() => portfolioModeHandler(social, "social")}>
                                Explore
                            </a>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={classes.Right}>
                <div className={classes.Arrow}>
                    <img onClick={() => nextSlide()} src={rightArrow} />
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ width: "100%", scrollbarWidth: "none" }}>
            <FullPage
                afterChange={(e) => {
                    if (e.to === 0) setPortfolioMode(false);
                }}
                initialSlide={1}
            >
                <Slide>{mainCarousel}</Slide>
                {portfolioMode === "mobile" && (
                    <Slide id="mobile" style={{ backgroundColor: "transparent" }}>
                        <PortfolioGrid
                            backgroundColor={"#DF3D3D"}
                            mode={"right"}
                            images={[snaxa1, snaxa2, snaxa3]}
                            primaryHeading={"ECOMMERCE"}
                            secondaryHeading={"SNAXA"}
                            mainText={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                        />
                    </Slide>
                )}
                {portfolioMode === "mobile" && (
                    <Slide>
                        <PortfolioGrid
                            backgroundColor={"#DF3D3D"}
                            mode={"left"}
                            images={[snaxa1, snaxa2, snaxa3]}
                            primaryHeading={"ECOMMERCE"}
                            secondaryHeading={"SNAXA"}
                            mainText={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                        />
                    </Slide>
                )}
                {portfolioMode === "mobile" && (
                    <Slide>
                        <PortfolioGrid
                            backgroundColor={"#DF3D3D"}
                            mode={"right"}
                            images={[snaxa1, snaxa2, snaxa3]}
                            primaryHeading={"ECOMMERCE"}
                            secondaryHeading={"SNAXA"}
                            mainText={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                        />
                    </Slide>
                )}
                {portfolioMode === "website" && (
                    <Slide id="website">
                        <PortfolioGrid
                            backgroundColor={"#DF3D3D"}
                            mode={"right"}
                            images={[snaxa1, snaxa2, snaxa3]}
                            primaryHeading={"WEBSITE"}
                            secondaryHeading={"SNAXA"}
                            mainText={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                        />
                    </Slide>
                )}
                {portfolioMode === "website" && (
                    <Slide>
                        <PortfolioGrid
                            backgroundColor={"#DF3D3D"}
                            mode={"left"}
                            images={[snaxa1, snaxa2, snaxa3]}
                            primaryHeading={"WEBSITE"}
                            secondaryHeading={"SNAXA"}
                            mainText={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                        />
                    </Slide>
                )}
            </FullPage>
        </div>
    );
};

export default Portfolio;
