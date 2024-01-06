// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "./styles.css";

import cFotoUm from "../../assets/img/webp/c_foto1.webp";
import cFotoDois from "../../assets/img/webp/c_foto2.webp";
import cFotoTres from "../../assets/img/webp/c_foto3.webp";
import cFotoQuatro from "../../assets/img/webp/c_foto4.webp";
import cFotoCinco from "../../assets/img/webp/c_foto5.webp";

const HeroCarrossel = () => {
  return (
    <div className="containerSwiper">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={false}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide className="swiper-img slide-1">
          <img
            src={cFotoUm}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-2">
          <img
            src={cFotoDois}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-3 slide-1">
          <img
            src={cFotoTres}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-3 slide-1">
          <img
            src={cFotoQuatro}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-3 slide-1">
          <img
            src={cFotoCinco}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarrossel;
