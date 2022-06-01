import React from "react";
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, EffectCards, Autoplay,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "../Image/Image";

const slide1 = require("../../assets/img/img_slide01.jpg")
const slide2 = require("../../assets/img/img_slide02.jpg")
const slide3 = require("../../assets/img/img_slide03.jpg")
const slide4 = require("../../assets/img/img_slide04.jpg")
const slide5 = require("../../assets/img/img_slide05.jpg")

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, EffectCards,Autoplay]}
            spaceBetween={50}
            navigation
            autoplay={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            effect="cards"
            grabCursor={true}
            loop={true}
            className={"slider-height"}
        >
            <SwiperSlide><Image path={slide1} /></SwiperSlide>
            <SwiperSlide><Image path={slide2} /></SwiperSlide>
            <SwiperSlide><Image path={slide3} /></SwiperSlide>
            <SwiperSlide><Image path={slide4} /></SwiperSlide>
            <SwiperSlide><Image path={slide5} /></SwiperSlide>
        </Swiper>
    );
};