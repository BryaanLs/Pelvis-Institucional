/* eslint-disable react/prop-types */
// AnimatedComponent.js
import { useEffect } from "react";
import "./styles.css";

const BoxAnimation = ({ animation, addClass, children }) => {
  useEffect(() => {
    const target = document.querySelectorAll("[data-anime]");
    const windowTop = window.innerHeight * 0.6;

    const animeScroll = () => {
      target.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
          e.classList.add("animate");
        } else {
          e.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", animeScroll);

    // Remova o listener de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", animeScroll);
    };
  }, []); // O array vazio como segundo argumento garante que o useEffect só é executado uma vez

  return (
    <span className={`boxAnimation ${addClass}`} data-anime={animation}>
      {children}
    </span>
  );
};

export default BoxAnimation;
