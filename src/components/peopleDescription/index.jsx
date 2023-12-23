/* eslint-disable react/prop-types */
// import React from "react";
import "./styles.css";
import BoxAnimation from "../boxAnimation";

const PeopleDescription = ({
  foto,
  alt,
  hUm,
  span,
  content,
  isList,
  children,
  reverse,
  animationUm,
  animationD,
}) => {
  const renderContent = () => {
    if (isList) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return content.map((item, index) => <p key={index}>{item}</p>);
    }
  };

  return (
    <div className={`peopleDescription ${reverse ? "reverse" : ""}`}>
      <BoxAnimation animation={animationUm}>
        <div className="peopleDescriptionImg">
          <img src={foto} width="300" height="367" alt={alt} loading="lazy" />
        </div>
      </BoxAnimation>
      <BoxAnimation animation={animationD}>
        <div className="pDescription">
          <h1>{hUm}</h1>
          <span>{span}</span>
          {renderContent()}
          {children}
        </div>
      </BoxAnimation>
    </div>
  );
};

export default PeopleDescription;
