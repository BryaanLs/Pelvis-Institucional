/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import stars from "../../assets/img/svgs/stars.svg";
import "./styles.css";

const GoogleCard = ({ h3, p, googleHref }) => {
  return (
    <a href={googleHref} target="_blank">
      <div className="googleCard">
        <img
          src={stars}
          alt="icone com 5 estrelas"
          width="110"
          height="31"
          loading="lazy"
        />
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
};

export default GoogleCard;
