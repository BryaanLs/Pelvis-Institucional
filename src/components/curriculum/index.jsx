/* eslint-disable react/prop-types */
// import React from 'react'
import "./styles.css";
import BoxAnimation from "../boxAnimation";
const Curriculum = ({ h2, img, altImg, a, aUrl, addClass, children }) => {
  return (
    <div className="curriculum">
      <h2>{h2}</h2>
      <div className={`pictureAndText ${addClass}`}>
        <BoxAnimation animation="left" addClass="animationPicture">
          <div className="picture">
            <img src={img} alt={altImg} />
          </div>
        </BoxAnimation>
        <div className="text">
          <BoxAnimation animation="right">{children}</BoxAnimation>
          <BoxAnimation animation="top" addClass="animationLink">
            <a href={aUrl}>{a}</a>
          </BoxAnimation>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
