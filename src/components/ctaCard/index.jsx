/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import BoxAnimation from "../boxAnimation";
import logoPelvieCta from "../../assets/img/svgs/logoPelvieCtaCard.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
import google from "../../assets/img/svgs/googleLogo.svg";
import "./styles.css";
const CtaCard = ({
  animationBtnUm,
  animationBtnDois,
  googleBtn,
  url,
  children,
}) => {
  return (
    <div className="ctaCard">
      <img src={logoPelvieCta} alt="logo da pelvie" width="140" height="141" />
      {children}
      <div className="ctaButtonsBox">
        <div className="ctaButtons">
          {googleBtn && (
            <BoxAnimation animation={animationBtnUm}>
              <a
                href="https://www.google.com/search?q=pelvie+-+fisioterapia+p%C3%A9lvica+funcional&oq=Pelvie&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyDQgCEC4YrwEYxwEYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgwIBRAAGAoYsQMYgAQyBggGEEUYPTIGCAcQRRg90gEIMzQ1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94ce573422e3ce3f:0xf18457c7bf00ec3f,1,,,,"
                className="ctaBtnUm"
                target="_blank"
              >
                Ver avaliações
                <img src={google} alt="logo do google" width="20" height="20" />
              </a>
            </BoxAnimation>
          )}
          <BoxAnimation animation={animationBtnDois}>
            <a href={url} className="ctaBtnZap" target="_blank">
              Agendar um horário
              <img src={whats} alt="logo do whatsapp" width="20" height="20" />
            </a>
          </BoxAnimation>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
