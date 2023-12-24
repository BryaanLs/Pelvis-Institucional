import Container from "../../components/container";
import BoxAnimation from "../../components/boxAnimation";
import "./styles.css";
import prancheta from "../../assets/img/svgs/prancheta.svg";
import pelvieBranca from "../../assets/img/svgs/logoPelvieBranca.svg";
import pelvieCinza from "../../assets/img/svgs/logoPelvieCinza.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
import checklist from "../../assets/img/svgs/checklistIcon.svg";
import relogio from "../../assets/img/svgs/relogio.svg";
import { NavLink } from "react-router-dom";

const Tratamento = () => {
  return (
    <>
      <Container sectionClass="bgHeroTratamento" />
      <Container mainClass="stepsAtendimento">
        <BoxAnimation animation="opacity">
          <span>Agendamento</span>
          <h2>
            As etapas do atendimento
            <img
              src={prancheta}
              alt="icone de uma prancheta com uma pessoa"
              width="30"
            />
          </h2>
        </BoxAnimation>

        <div className="stepsCardsBox">
          <BoxAnimation animation="left">
            <div className="stepsCard">
              <h3>
                <div className="complement">
                  <span>1</span>
                </div>
                Agende sua avaliação
                <img
                  src={pelvieBranca}
                  alt="logo da pelvie branca"
                  width="40"
                />
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
          </BoxAnimation>
          <BoxAnimation animation="right">
            <div className="stepsCard">
              <h3>
                <div className="complement">
                  <span>2</span>
                </div>
                Início das sessões
                <img
                  src={pelvieBranca}
                  alt="logo da pelvie branca"
                  width="40"
                />
              </h3>
              <span>Totalmente personalizado!</span>
              <p>
                Após passar pela avaliação, você iniciará suas sessões, cuja
                frequência será determinada em conjunto com a fisioterapia.
              </p>
              <p>
                A frequência pode ser semanal, duas vezes por semana ou até
                mesmo com intervalos maiores, a depender de cada caso
              </p>
              <NavLink to="ComoFunciona" className="linkTratamentos">
                Agendar avaliação
                <img src={checklist} alt="logo do whatsapp" width="20" />
              </NavLink>
            </div>
          </BoxAnimation>
        </div>

        <BoxAnimation animation="bottom">
          <div className="diferencial">
            <div>
              <div className="complementoRelogio">
                <img
                  src={relogio}
                  alt="iconde de um relógio com um simbolo de adição"
                />
              </div>
              <h3>
                Qual é o <b>&nbsp;diferencial&nbsp;</b> da Clínica Pélvie
                <img src={pelvieCinza} alt="logo cinza da pelvie" width="30" />
              </h3>
            </div>
            <h4>Atendimento personalizado e totalmente detalhado</h4>
            <p>
              Ao contrário de outras clínicas, que reservam no máximo 60
              minutos, aqui na Pélvie, nosso atendimento é marcado com
              intervalos de 90 minutos, ou seja,
              <b> disponibilizamos mais tempo para entender cada caso</b> e
              explicar detalhadamente as próximas etapas do tratamento.
            </p>
          </div>
        </BoxAnimation>
      </Container>

      <Container></Container>
    </>
  );
};

export default Tratamento;
