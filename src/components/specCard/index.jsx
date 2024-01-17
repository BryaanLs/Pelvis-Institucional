/* eslint-disable react/prop-types */
import "./styles.css";
import arrow from "../../assets/img/svgs/whiteArrow.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SpecCard = ({ h3, p, img, span, id }) => {
  const [openCard, setOpenCard] = useState(false);

  function handleClick() {
    setOpenCard((ativo) => !ativo);
  }

  return (
    <>
      <div className="CardMain">
        <div className="specCard">
          <img
            src={img}
            alt="foto da dra.michelle"
            width="270"
            height="435"
            style={{
              border: openCard
                ? "0px solid var(--branco)"
                : "3px solid var(--branco)",
            }}
            loading="lazy"
          />
          <div
            className="descriptionCard"
            style={{ bottom: openCard ? "0px" : "-50%" }}
          >
            <h3>
              <span>Dra.</span>
              {h3}
            </h3>
            <p>{p}</p>
            <span>{span}</span>
          </div>
          <button
            onClick={handleClick}
            style={{ rotate: openCard ? "360deg" : "180deg" }}
            name="arrowCard"
          >
            <img
              src={arrow}
              alt="seta para abrir o cartão"
              width="22"
              height="13"
              loading="lazy"
            />
          </button>
        </div>
        {!openCard && (
          <NavLink to={`/QuemSomos#${id}`}>
            <div className="doctorName">
              <h3>
                <span>Dra. </span>
                {h3}
              </h3>
            </div>
          </NavLink>
        )}
      </div>
    </>
  );
};

export default SpecCard;
