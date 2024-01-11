// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "./styles.css";
import { heroSlides } from "./pathImages";

const HeroCarrossel = () => {
  return (
    <div className="containerSwiper">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide className={`swiper-img slide-${index}`} key={index}>
            <picture>
              <source media="(max-width: 800px)" srcSet={slide.mobile} />
              <img
                src={slide.full}
                alt="Foto do escritório"
                width="1915"
                height="917"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarrossel;
