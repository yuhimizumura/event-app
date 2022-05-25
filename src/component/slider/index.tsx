import React, { Component } from "react";
import Slider from "react-slick";
import Image from "../Image/Image";
const img1 = require("/src/assets/img/img_slide01.jpg")
const img2 = require("/src/assets/img/img_slide02.jpg")
const img3 = require("/src/assets/img/img_slide03.jpg")

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <div>
                <Slider {...settings}>
                    <Image path={img1} />
                    <Image path={img2} />
                    <Image path={img3} />
                </Slider>
            </div>
        );
    }
}