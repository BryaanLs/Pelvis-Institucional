/* eslint-disable react/prop-types */
// import React from 'react'
import "./styles.css";

const Card = ({ img, h3, p, addClass }) => {
  return (
    <div className={`card ${addClass}`}>
      <img src={img} alt="icone de uma pessoa" width="40" height="40" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default Card;
