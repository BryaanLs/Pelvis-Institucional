/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

const Accordion = ({
  title,
  children,
  type,
  corBolinha,
  addClass,
  bolinha,
}) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAccordionClick = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div
      className={`bolinha verde ${bolinha} ${corBolinha ? corBolinha : null}`}
    >
      <div
        className={`accordion ${addClass}
        ${openAccordion ? "open" : "closed"} 
        ${type ? type : null}`}
      >
        <div className="accordionHeader" onClick={handleAccordionClick}>
          <h2>{title}</h2>
          <button
            className="btnAcc"
            style={{ rotate: openAccordion ? "180deg" : "0deg" }}
          ></button>
        </div>
        {openAccordion && <div className="accordionText">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
