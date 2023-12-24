import Container from "../../components/container";
// import BoxAnimation from "../../components/boxAnimation";
import "./styles.css";
import prancheta from "../../assets/img/svgs/prancheta.svg";
import pelvieBranca from "../../assets/img/svgs/logoPelvieBranca.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
import checklist from "../../assets/img/svgs/checklistIcon.svg";
import { NavLink } from "react-router-dom";

const Tratamento = () => {
  return (
    <>
      <Container sectionClass="bgHeroTratamento" />
      <Container mainClass="stepsAtendimento">
        <span>Agendamento</span>
        <h2>
          As etapas do atendimento
          <img
            src={prancheta}
            alt="icone de uma prancheta com uma pessoa"
            width="30"
          />
        </h2>

        <div className="stepsCardsBox">
          <div className="stepsCard">
            <h3>
              <div className="complement">
                <span>1</span>
              </div>
              Agende sua avaliação
              <img src={pelvieBranca} alt="logo da pelvie branca" width="40" />
            </h3>
            <span>Fácil e rápido</span>
            <p>
              O primeiro passo é agendar sua avaliação para que seu tratamento
              seja determinado da maneira mais efetiva possível.
            </p>
            <p>O agendamento é feito via WhatsApp ou ligação!</p>
            <a href="#" className="linkAvaliação">
              Agendar avaliação
              <img src={whats} alt="logo do whatsapp" width="20" />
            </a>
          </div>

          <div className="stepsCard">
            <h3>
              <div className="complement">
                <span>2</span>
              </div>
              Início das sessões
              <img src={pelvieBranca} alt="logo da pelvie branca" width="40" />
            </h3>
            <span>Totalmente personalizado!</span>
            <p>
              Após passar pela avaliação, você iniciará suas sessões, cuja
              frequência será determinada em conjunto com a fisioterapia.
            </p>
            <p>
              A frequência pode ser semanal, duas vezes por semana ou até mesmo
              com intervalos maiores, a depender de cada caso
            </p>
            <NavLink to="ComoFunciona" className="linkTratamentos">
              Agendar avaliação
              <img src={checklist} alt="logo do whatsapp" width="20" />
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tratamento;
