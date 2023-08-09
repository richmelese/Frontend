import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper/core";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "../../styles/home/slide.css";
import Log1 from "../../Assets/partner- (1).png";
import Log2 from "../../Assets/partner- (2).png";
import Log3 from "../../Assets/partner- (3).png";
import Log4 from "../../Assets/partner- (1).png";
import Log5 from "../../Assets/partner- (3).png";
import Log6 from "../../Assets/partner- (2).png";
// SwiperCore.use([Autoplay]);

const Slider = () => {
  return (
    <div>
      {/* <h3 className="Silder__Text">Here are some of our trusted partners</h3> */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          600: {
            // width: 576,
            slidesPerView: 3,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        id="Log__swiper"
      >
        <SwiperSlide>
          <img src={Log1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
