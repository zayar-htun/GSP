import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "./CarouselShow.css";

const CarouselShow = () => {
    const items = [
        {
            guid: 1,
            image: "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
            alt: "First slide",
            caption: "Slide 1",
        },
        {
            guid: 2,
            image: "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
            alt: "Second slide",
            caption: "Slide 2",
        },
        {
            guid: 3,
            image: "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
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
