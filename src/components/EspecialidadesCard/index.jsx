/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./styles.css";

const EspecialidadesCard = ({ h3, img, altImg, href, aText, children }) => {
  return (
    <div className="especCard">
      <h3>{h3}</h3>
      <div className="boxImg">
        <a href={href}>
          <img src={img} alt={altImg} width={370} />
        </a>
      </div>
      {children}
      <NavLink to={href}>{aText}</NavLink>
      {/* <a href={href}>{aText}</a> */}
    </div>
  );
};

export default EspecialidadesCard;
