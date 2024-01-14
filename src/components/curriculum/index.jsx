/* eslint-disable react/prop-types */

import "./styles.css";
import BoxAnimation from "../boxAnimation";
const Curriculum = ({ img, altImg, a, aUrl, addClass, children }) => {
  return (
    <div className="curriculum">
      <div className={`pictureAndText ${addClass}`}>
        <BoxAnimation animation="left" addClass="animationPicture">
          <div className="picture">
            <a href={aUrl}>
              <img
                src={img}
                alt={altImg}
                width="365"
                height="445"
                loading="lazy"
              />
            </a>
          </div>
        </BoxAnimation>
        <div className="text">
          <BoxAnimation addClass="textContent" animation="right">
            {children}
            <BoxAnimation animation="top" addClass="animationLink">
              <a href={aUrl}>{a}</a>
            </BoxAnimation>
          </BoxAnimation>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
