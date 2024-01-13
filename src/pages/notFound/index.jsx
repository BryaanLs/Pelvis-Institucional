import Lottie from "lottie-react";
import animationData from "../../lottie/notFound.json";
import "./styles.css";
import Container from "../../components/container";
import { NavLink } from "react-router-dom";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
const NotFound = () => {
  return (
    <>
      <Container sectionClass="bgNotFound" mainClass="notFoundContent">
        <div className="fakeBg"></div>
        <div className="notFoundMessage">
          <span className="spanLabel">
            Não foi possível encontrar a página :({" "}
          </span>
          <h2>Parece que você se perdeu...</h2>
          <p>
            Será que essa página se mudou? Foi deletada? Ou nunca existiu? Vamos
            voltar para a <b>página inicial</b> e recomeçar de lá, ok? É bem
            fácil
          </p>

          <div className="returnNotFound">
            <NavLink to="/" className="ctaBtn2">
              Ir para a página incial
            </NavLink>
            <p>Ou</p>
            <a href="#" className="ctaBtnZap">
              Entre em contato
              <img src={whats} alt="logo do whatsapp" width="20" height="20" />
            </a>
          </div>
        </div>
        <Lottie animationData={animationData} className="notFoundJson" />
      </Container>
    </>
  );
};

export default NotFound;
