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

const img1 = require("/src/assets/img/img_slide01.png")
const img2 = require("/src/assets/img/img_slide02.png")
const img3 = require("/src/assets/img/img_slide03.png")
const img4 = require("/src/assets/img/img_slide04.png")

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
            <SwiperSlide><Image path={img1} /></SwiperSlide>
            <SwiperSlide><Image path={img2} /></SwiperSlide>
            <SwiperSlide><Image path={img3} /></SwiperSlide>
            <SwiperSlide><Image path={img1} /></SwiperSlide>
            <SwiperSlide><Image path={img2} /></SwiperSlide>
            <SwiperSlide><Image path={img3} /></SwiperSlide>
            <SwiperSlide><Image path={img1} /></SwiperSlide>
            <SwiperSlide><Image path={img2} /></SwiperSlide>
            <SwiperSlide><Image path={img3} /></SwiperSlide>
        </Swiper>
    );
};