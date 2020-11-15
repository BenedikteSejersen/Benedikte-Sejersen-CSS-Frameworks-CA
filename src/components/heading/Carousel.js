import React from 'react'
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2.jpg";
import carousel3 from "../../images/carousel-3.jpg";
import { Carousel } from 'react-bootstrap'


export default function CarouselHeading() {
    return (
        <Carousel className="carousel-container">

            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={carousel1}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={carousel2}
                alt="Third slide"
                />
                    
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={carousel3}
                alt="Third slide"
                />                    
            </Carousel.Item>

        </Carousel>
    )
}
