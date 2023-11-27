import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "./CarouselShow.css";

const CarouselShow = () => {
    const items = [
        {
            guid: 1,
            image: "/src/assets/carousel/c1.jpg",
            alt: "First slide",
            caption: "Slide 1",
        },
        {
            guid: 2,
            image: "/src/assets/carousel/c2.jpg",
            alt: "Second slide",
            caption: "Slide 2",
        },
        {
            guid: 3,
            image: "/src/assets/carousel/c3.jpg",
            alt: "Third slide",
            caption: "Slide 3",
        },
        {
            guid: 4,
            image: "/src/assets/carousel/c4.jpg",
            alt: "Third slide",
            caption: "Slide 3",
        },
    ];

    return (
        <div>
            <Carousel
                autoFocus
                infiniteLoop
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}
                style={{ height: "550px" }}
            >
                {items.map(item => {
                    return (
                        <div key={item.guid}>
                            <img src={item.image} alt="Slide 1" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default CarouselShow;
