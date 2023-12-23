/* eslint-disable react/prop-types */
// import React from 'react'
import "./styles.css";
const Curriculum = ({ h2, img, altImg }) => {
  return (
    <>
      <h2>{h2}</h2>
      <div className="pictureAndText">
        <div className="picture">
          <img src={img} alt={altImg} />
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            explicabo totam reiciendis aliquid libero blanditiis! Soluta
            suscipit quo, dolorem accusamus perferendis perspiciatis, alias
            dolorum recusandae, minus iure fugit dolor consequuntur?
          </p>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
