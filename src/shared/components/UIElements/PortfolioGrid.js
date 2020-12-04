import React, { useState } from "react";
import classes from "./PortfolioGrid.module.css";

import arrowRightWhite from "../../assets/Images/arrowRightWhite.png";
import arrowLeftWhite from "../../assets/Images/arrowLeftWhite.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PortfolioGrid = (props) => {
    let { mode, images, primaryHeading, secondaryHeading, mainText, backgroundColor } = props;
    // mode = "right";
    // images = [snaxa1, snaxa2, snaxa3];

    const [selectedSlide, setSelectedSlide] = useState(0);

    const nextSlide = () => {
        if (selectedSlide === images.length - 1) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => (prState += 1));
    };
    const previousSlide = () => {
        if (selectedSlide === 0) {
            setSelectedSlide(images.length - 1);
            return;
        }
        setSelectedSlide((prState) => (prState -= 1));
    };

    let content;

    if (mode === "right") {
        content = (
            <div className={classes.PortfolioGrid}>
                <div style={{ backgroundColor: backgroundColor }} className={classes.PortfolioGrid_Banner}>
                    <div className={classes.Left}>
                        <div className={classes.Left_Container}>
                            <h2>{primaryHeading}</h2>
                            <h1>{secondaryHeading}</h1>
                            <p>{mainText}</p>
                        </div>
                    </div>
                    <div className={classes.Right}>
                        <div className={classes.Right_Carousel}>
                            <Carousel
                                selectedItem={selectedSlide}
                                showThumbs={false}
                                showIndicators={false}
                                showStatus={false}
                                showArrows={false}>
                                {images &&
                                    images.map((i) => {
                                        return (
                                            <div className={classes.Right_Carousel_Image}>
                                                <img src={i} />
                                            </div>
                                        );
                                    })}
                            </Carousel>
                        </div>
                        <div className={classes.Right_Carousel_Arrow_Images}>
                            <img onClick={() => previousSlide()} src={arrowLeftWhite} />
                            <img onClick={() => nextSlide()} src={arrowRightWhite} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (mode === "left") {
        content = (
            <div className={classes.PortfolioGrid}>
                <div style={{ backgroundColor: backgroundColor }} className={classes.PortfolioGrid_Banner}>
                    <div className={classes.Right}>
                        <div className={classes.Right_Carousel}>
                            <Carousel
                                selectedItem={selectedSlide}
                                showThumbs={false}
                                showIndicators={false}
                                showStatus={false}
                                showArrows={false}>
                                {images &&
                                    images.map((i) => {
                                        return (
                                            <div className={classes.Right_Carousel_Image}>
                                                <img src={i} />
                                            </div>
                                        );
                                    })}
                            </Carousel>
                        </div>
                        <div className={classes.Right_Carousel_Arrow_Images}>
                            <img onClick={() => previousSlide()} src={arrowLeftWhite} />
                            <img onClick={() => nextSlide()} src={arrowRightWhite} />
                        </div>
                    </div>
                    <div className={classes.LeftLeft}>
                        <div className={classes.LeftLeft_Container}>
                            <h2>{primaryHeading}</h2>
                            <h1>{secondaryHeading}</h1>
                            <p>{mainText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return content ? content : <p></p>;
};

export default PortfolioGrid;
