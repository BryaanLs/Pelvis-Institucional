import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTarget = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }
  }, [location.hash]);
};

export default ScrollToTarget;
