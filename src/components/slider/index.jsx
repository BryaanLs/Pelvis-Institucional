import React from "react";
import s from "./styles.module.css";
import { slides } from "./pathImages";
import arrow from "../../assets/img/svgs/whiteArrow.svg";

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <div className={s.sliderMain}>
      <div style={{ position: "relative" }}>
        <section className={s.containerSlide}>
          <div
            ref={contentRef}
            className={s.content}
            style={{ transform: `translateX(${position}px)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${s.item} ${
                  active === index ? s.slideActive : s.slideItem
                }`}
              >
                <picture>
                  <source media="(max-width: 800px)" srcSet={slide.mobile} />
                  <img
                    src={slide.full}
                    alt="Slide"
                    width="1200"
                    height="455"
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>

          <nav className={s.nav}>
            <button onClick={slidePrev} name="arrowLeft">
              <img src={arrow} alt="svg de uma seta" loading="lazy" />
            </button>
            <button onClick={slideNext} name="arrowRight">
              <img src={arrow} alt="svg de uma seta" loading="lazy" />
            </button>
          </nav>
        </section>
        {/* Miniaturas dos slides */}
      </div>
      <div className={s.thumbnailContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${s.thumbnail} ${
              active === index ? s.thumbnailActive : s.thumbnailItem
            }`}
            onClick={() => setActive(index)}
          >
            <img
              src={slide.thumb}
              alt="Foto da clínica"
              loading="lazy"
              width="100"
              height="81"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
