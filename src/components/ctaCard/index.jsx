/* eslint-disable react/prop-types */
import BoxAnimation from "../boxAnimation";
import logoPelvieCta from "../../assets/img/svgs/logoPelvieCtaCard.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
import google from "../../assets/img/svgs/googleLogo.svg";
import "./styles.css";
const CtaCard = ({ animationBtnUm, animationBtnDois, p }) => {
  return (
    <div className="ctaCard">
      <img src={logoPelvieCta} alt="logo da pelvie" width="140" height="141" />
      <p>{p}</p>
      <div className="ctaButtonsBox">
        <p>
          <b>5 </b>estrelas no <strong>Google!</strong>
          <br />
          Quem escolheu a Pelvie, gostou muito
        </p>
        <div className="ctaButtons">
          <BoxAnimation animation={animationBtnUm}>
            <a href="#" className="ctaBtnUm">
              Ver Avaliações
              <img src={google} alt="logo do google" width="20" height="20" />
            </a>
          </BoxAnimation>
          <BoxAnimation animation={animationBtnDois}>
            <a href="#" className="ctaBtnDois">
              Reservar um horário
              <img src={whats} alt="logo do whatsapp" width="20" height="20" />
            </a>
          </BoxAnimation>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
