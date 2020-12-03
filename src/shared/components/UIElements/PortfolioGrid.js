import React, { useState } from "react";
import classes from "./PortfolioGrid.module.css";

import snaxa1 from "../../assets/Images/snaxa1.png";
import snaxa2 from "../../assets/Images/snaxa2.png";
import snaxa3 from "../../assets/Images/snaxa3.png";

import arrowRightWhite from "../../assets/Images/arrowRightWhite.png";
import arrowLeftWhite from "../../assets/Images/arrowLeftWhite.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PortfolioGrid = (props) => {
    let { mode, images } = props;
    mode = "right";
    images = [snaxa1, snaxa2, snaxa3];

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

    return (
        <div className={classes.PortfolioGrid}>
            <div style={{ backgroundColor: "#DF3D3D" }} className={classes.PortfolioGrid_Banner}>
                <div className={classes.Left}>
                    <div className={classes.Left_Container}>
                        <h2>ECOMMERCE</h2>
                        <h1>SNAXA</h1>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </p>
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
                            {images.map((i) => {
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
};

export default PortfolioGrid;
