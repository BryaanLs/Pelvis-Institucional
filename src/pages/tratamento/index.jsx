// import React from "react";
import Container from "../../components/container";
// import Slider from "../../components/slider";
// import Hero from "../../components/hero";
// import bgHero from "../../assets/img/bgHeroTratamento.png";
import BoxAnimation from "../../components/boxAnimation";
import "./styles.css";

const Tratamento = () => {
  return (
    <>
      <div style={{ height: "20rem" }}></div>
      <Container>
        <div className="steps cardBox">
          <BoxAnimation animation="top">
            <div className="stepsHeader">
              <span>Agendamento</span>
              <h2 className="titleCubeL">As etapas do atendimento</h2>
              <p>
                Acolhimento, empatia e segurança:
                <br /> aqui os pacientes se
                <b> sentem em casa.</b>
              </p>
            </div>
          </BoxAnimation>
          <div className="stepsCards">
            <BoxAnimation animation="left">
              <div className="cardBox">
                <h3>Agende uma avaliação</h3>
                <p>
                  O primeiro passo é <b>agendar sua avaliação</b> para que seu
                  tratamento seja determinado da maneira <b>mais efetiva</b>
                  possível!
                </p>
                <p>
                  O agendamento deverá ser feito através do WhatsApp ou ligação!
                </p>
                <a href="#" target="_blank">
                  Como funciona a avaliação?
                </a>
              </div>
            </BoxAnimation>
            <BoxAnimation animation="right">
              <div className="cardBox">
                <h3>Início das sessões</h3>
                <p>
                  Após <b>passar pela avaliação</b>, você iniciará suas sessões,
                  cuja frequência será determinada <b>em conjunto</b> com a
                  fisioterapeuta.
                </p>
                <p>
                  A frequência pode ser semanal, duas vezes por semana ou até
                  mesmo com intervalos maiores, a depender de cada caso.
                </p>
                <a href="#" target="_blank">
                  Conheça a nossa equipe!
                </a>
              </div>
            </BoxAnimation>
          </div>
          <BoxAnimation>
            <div className="stepsFooter">
              <h2 className="titleCubeL">Atendimento personalizado</h2>
              <p>
                Dispomos de uma secretária que te auxiliará em todos as etapas,
                desde o <b>agendamento</b> e <b>confirmação das sessões,</b> até
                as formas de pagamento e <b>obtenção do reembolso</b> junto ao
                plano de saúde.
              </p>

              <a href="#" className="cta">
                Reserve seu horário
              </a>
            </div>
          </BoxAnimation>
        </div>
      </Container>
    </>
  );
};

export default Tratamento;
