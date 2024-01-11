/* eslint-disable react/prop-types */
// import React from 'react'
import "./styles.css";

const Card = ({ img, h2, p, addClass }) => {
  return (
    <div className={` ${addClass} card`}>
      <img src={img} alt="icone de uma pessoa" width="53" height="50" />
      <h2>{h2}</h2>
      {p}
    </div>
  );
};

export default Card;
