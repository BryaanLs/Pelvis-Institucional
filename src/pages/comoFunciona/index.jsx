// Estilos
import "./styles.css";

//Componentes
import Container from "../../components/container";
import BoxAnimation from "../../components/boxAnimation";
import { NavLink } from "react-router-dom";
import CtaCard from "../../components/ctaCard";
import EspecialidadesCard from "../../components/EspecialidadesCard";

//Fotos
import fisioPelvica from "../../assets/img/webp/especialidadeMobile1.webp";
import acupuntura from "../../assets/img/webp/especialidadeMobile2.webp";
import pilates from "../../assets/img/webp/especialidadeMobile3.webp";

//Icones
import prancheta from "../../assets/img/svgs/prancheta.svg";
import pelvieBranca from "../../assets/img/svgs/logoPelvieBranca.svg";
import pelvieCinza from "../../assets/img/svgs/logoPelvieCinza.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";
import checklist from "../../assets/img/svgs/checklistIcon.svg";
import relogio from "../../assets/img/svgs/relogio.svg";
import pranchetaComSeta from "../../assets/img/svgs/pranchetaComSeta.svg";
import check from "../../assets/img/svgs/check.svg";

const ComoFunciona = () => {
  return (
    <>
      <Container sectionClass="bgHeroTratamento" />
      <Container mainClass="stepsAtendimento">
        <BoxAnimation animation="opacity">
          <h2>
            Etapas do Atendimento
            <img
              src={prancheta}
              alt="icone de uma prancheta com uma pessoa"
              width="30"
            />
          </h2>
        </BoxAnimation>

        <div className="stepsCardsBox">
          <BoxAnimation animation="left">
            <div className="complement">
              <span>1</span>
            </div>
            <div className="stepsCard">
              <h3>
                Agendar avaliação
                <img
                  src={pelvieBranca}
                  alt="logo da pelvie branca"
                  width="40"
                />
              </h3>
              <span className="stepsCardDesc">Fácil e rápido</span>
              <p>
                Nosso agendamento é feito via WhatsApp ou ligação. O horário de
                atendimento é bem amplo: segunda a sexta das 7h às 21h e aos
                sábado das 8h às 14h.
              </p>
              <p>
                A avaliação é personalizada e consiste em uma entrevista inicial
                e em um exame físico. Com base nisto, a fisioterapeuta elabora
                um diagnóstico e um plano de tratamento individualizado, sendo
                possível estimar a duração do tratamento e a frequência
                adequada.
              </p>
              <a href="#" className="linkAvaliação" target="_blank">
                Agendar avaliação
                <img src={whats} alt="logo do whatsapp" width="20" />
              </a>
            </div>
          </BoxAnimation>
          <BoxAnimation animation="right">
            <div className="stepsCard">
              <div className="complement">
                <span>2</span>
              </div>
              <h3>
                Iniciar o tratamento
                <img
                  src={pelvieBranca}
                  alt="logo da pelvie branca"
                  width="40"
                />
              </h3>
              <span className="stepsCardDesc">Totalmente personalizado!</span>
              <p>
                Desde a primeira sessão, fornecemos educação abrangente e
                orientações diversas, incluindo mudanças no estilo de vida. O
                progresso é avaliado rotineiramente e o plano de tratamento é
                reajustado conforme for necessário.
              </p>
              <p>
                As principais técnicas consistem em exercícios, terapias manuais
                e o uso de determinados equipamentos e tecnologias, como o
                biofeedback eletromiográfico, que auxiliam na obtenção dos
                resultados.
              </p>
              <NavLink to="ComoFunciona" className="linkTratamentos">
                Tire suas dúvidas
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
                Nosso diferencial
                <img src={pelvieCinza} alt="logo cinza da pelvie" width="30" />
              </h3>
            </div>
            <p>
              Os agendamentos são realizados a cada 90 minutos. Este tempo
              diferenciado garante a mais alta qualidade de atendimento durante
              sua sessão, tornando-a mais resolutiva.
            </p>
          </div>
        </BoxAnimation>
      </Container>

      <Container mainClass="reembolso">
        <div className="reembolsoBox">
          <div className="reembolsoTitle">
            <h2>
              <strong>Reembolso</strong>
            </h2>
            <img
              src={pranchetaComSeta}
              alt="icone de uma prancheta com seta"
              width="30"
            />
          </div>
          <div className="reembolsoContent">
            <span>Orientamos o passo a passo!</span>
            <p>
              Caso você tenha plano de saúde, pode solicitar o reembolso das
              suas sessões de Fisioterapia Pélvica. Você precisará do
              encaminhamento médico contendo seu diagnóstico e nós emitiremos a
              Nota Fiscal e demais documentos necessários.
            </p>
            <ul>
              <li>
                <img src={check} alt="icone de check" width="20" /> Alto
                percentual de aprovação
              </li>
              <li>
                <img src={check} alt="icone de check" width="20" />
                Emissão de nota fiscal
              </li>
              <li>
                <img src={check} alt="icone de check" width="20" />
                Elaboração de relatórios
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container mainClass="especialidadesMain">
        <span className="spanLabel">Estamos preparadas para te receber</span>
        <h3>Saiba mais sobre nossos tratamentos</h3>
        <div className="especialidades">
          <BoxAnimation animation="left">
            <EspecialidadesCard
              h3="Fisioterapia Pélvica"
              aText="Saiba Mais"
              img={fisioPelvica}
              altImg={"Foto da Dra. Juliana com uma paciente"}
              href="/Tratamento"
            >
              <p>
                É uma especialidade da fisioterapia que busca tratar e prevenir
                disfunções relacionadas ao assoalho pélvico. Indicada para o
                tratamento de incontinência urinária, prolapsos genitais,
                disfunções sexuais, constipação intestinal, preparação para o
                parto e na recuperação pós-parto, como a diástase abdominal e
                outros.
              </p>
            </EspecialidadesCard>
          </BoxAnimation>
          <BoxAnimation animation="top">
            <EspecialidadesCard
              h3="Acupuntura"
              aText="Saiba Mais"
              img={acupuntura}
              altImg={"Foto mostrando o acupunturismo"}
              href="/Tratamento"
            >
              <p>
                É uma especialidade da Medicina Tradicional Chinesa que tem foco
                no tratamento de problemas relacionados à saúde. Quando voltada
                à saúde da mulher, busca o reequilíbrio de desarmonias em suas
                diferentes fases da vida, como no período menstrual, na
                menopausa, na gestação, no pré e pós-parto, entre outras.
              </p>
            </EspecialidadesCard>
          </BoxAnimation>
          <BoxAnimation animation="right">
            <EspecialidadesCard
              h3="Pilates"
              aText="Saiba Mais"
              img={pilates}
              altImg={"Foto da Dra. Juliana dando aula de pilates"}
              href="/Tratamento"
            >
              <p>
                É um método de exercícios que visa trabalhar a conexão entre
                mente e corpo. Sua prática traz benefícios como melhora da
                flexibilidade e da mobilidade, ganho de força muscular e alívio
                de dores. Oferecidas por fisioterapeuta especializada, as aulas
                de Pilates são totalmente focadas em gestantes e em mulheres no
                pós-parto.
              </p>
            </EspecialidadesCard>
          </BoxAnimation>
        </div>
      </Container>
      <Container>
        <CtaCard>
          <p>
            Benefícios duradouros através de mudanças positivas no estilo de
            vida!
          </p>
        </CtaCard>
      </Container>
    </>
  );
};

export default ComoFunciona;
