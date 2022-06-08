import React from "react";
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, EffectCreative, Autoplay,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "../Image/Image";
import { useState, useEffect } from 'react';

const slide1 = require("../../assets/img/img_slide01.jpg")
const slide2 = require("../../assets/img/img_slide02.jpg")
const slide3 = require("../../assets/img/img_slide03.jpg")
const slide4 = require("../../assets/img/img_slide04.jpg")
const slide5 = require("../../assets/img/img_slide05.jpg")

export default () => {

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    let view = 2

    if(windowDimensions.width < 640) {
        view = 1
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar,Autoplay]}
            spaceBetween={50}
            slidesPerView={view}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // effect="creative"
            grabCursor={true}
            loop={true}
        >
            <SwiperSlide>
                <iframe  src="https://www.youtube.com/embed/-3guUmOUpQg"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <dl className="mt-2">
                    <dt>
                        <span>Title:</span>
                        <span className="ml-1">Osaka Night Run</span>
                    </dt>
                    <dd>
                        <span>Creator</span>
                        <span className="ml-1">Yuhi_Sixxx</span>
                    </dd>
                </dl>
            </SwiperSlide>
            <SwiperSlide>
                <iframe src="https://www.youtube.com/embed/3TGeBr0GhUc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <dl className="mt-2">
                    <dt>
                        <span>Title:</span>
                        <span className="ml-1">Osaka Night Run</span>
                    </dt>
                    <dd>
                        <span>Creator</span>
                        <span className="ml-1">Yuhi_Sixxx</span>
                    </dd>
                </dl>
            </SwiperSlide>
            <SwiperSlide>
                <iframe src="https://www.youtube.com/embed/KsunI5UQVJQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <dl className="mt-2">
                    <dt>
                        <span>Title:</span>
                        <span className="ml-1">Osaka Night Run</span>
                    </dt>
                    <dd>
                        <span>Creator</span>
                        <span className="ml-1">Yuhi_Sixxx</span>
                    </dd>
                </dl>
            </SwiperSlide>
            <SwiperSlide>
                <iframe src="https://www.youtube.com/embed/hcXMTaG3fgk"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <dl className="mt-2">
                    <dt>
                        <span>Title:</span>
                        <span className="ml-1">Osaka Night Run</span>
                    </dt>
                    <dd>
                        <span>Creator</span>
                        <span className="ml-1">Yuhi_Sixxx</span>
                    </dd>
                </dl>
            </SwiperSlide>
        </Swiper>
    );
};