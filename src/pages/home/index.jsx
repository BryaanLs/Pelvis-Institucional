/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

// ** IMPORTS
// Estilos
import "./styles.css";

// Components
import HeroCarrossel from "../../components/HeroCarrossel";
import EspecialidadesCard from "../../components/EspecialidadesCard";
import Container from "../../components/container";
import SpecCard from "../../components/specCard";
import BoxAnimation from "../../components/boxAnimation";
import Loader from "../../components/loader";
import CardHome from "../../components/card";
import GoogleCard from "../../components/googleCard";
import CtaCard from "../../components/ctaCard";

// Hooks
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

//Fotos
import michelle from "../../assets/img/michelle.png";
import michele from "../../assets/img/webp/michelle.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import thais from "../../assets/img/webp/thais.webp";
import cibele from "../../assets/img/webp/cibele.webp";

//Icones
import acolhimento from "../../assets/img/svgs/acolhimento.svg";
import cuidado from "../../assets/img/svgs/cuidado.svg";
import notaMaxima from "../../assets/img/svgs/notaMaxima.svg";

// Lazy imports
const Maps = lazy(() => import("../../components/maps"));
const Carrossel = lazy(() => import("../../components/slider"));

const Home = () => {
  return (
    <>
      <HeroCarrossel />

      <Container mainClass="bgTitleCardsHome">
        <div className="cardsHomeHeader">
          <BoxAnimation animation="top">
            <div className="titleCardsHomeText">
              <h1>
                Somos uma clínica especializada em
                <br />
                <strong>reabilitação pélvica</strong>
              </h1>
              <span>Por que escolher a PELVIE?</span>
            </div>
          </BoxAnimation>
          <BoxAnimation animation="top">
            <div className="titleCardsHomeCtas">
              <NavLink to="/tratamento">Tratamentos</NavLink>
              <a href="#" target="_blank">
                Agendar sua avaliação
              </a>
            </div>
          </BoxAnimation>
        </div>
        <div className="cardsHome">
          <BoxAnimation animation="left">
            <CardHome
              img={acolhimento}
              h3="Acolhimento e Empatia "
              p="Aqui você é recebida de braços abertos e vai se sentir em casa!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={cuidado}
              h3="Cuidado Integral"
              p="Profissionais especializadas e em constante atualização."
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={notaMaxima}
              h3="Nota Máxima no Google"
              p="Pacientes 100% satisfeitas! "
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container mainClass="especialidadesMain">
        <span className="spanLabel">Cuidado completo!</span>
        <h3>Conheça nossas especialidades</h3>
        <div className="especialidades">
          <BoxAnimation animation="left">
            <EspecialidadesCard
              h3="Fisioterapia Pélvica"
              aText="Saiba Mais"
              img={michelle}
              altImg={"Foto da Dra. Michelle"}
              href={"#"}
              p={
                "É uma especialidade da fisioterapia que busca tratar e prevenir disfunções relacionadas ao assoalho pélvico.  Indicada para o tratamento de incontinência urinária, prolapsos genitais, disfunções sexuais, constipação intestinal, preparação para o parto e na recuperação pós-parto, como a diástase abdominal, e outros."
              }
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <EspecialidadesCard
              h3="Acupuntura"
              aText="Saiba Mais"
              img={michelle}
              altImg={"Foto da Dra. Michelle"}
              href={"#"}
              p={
                "É uma especialidade da Medicina Tradicional Chinesa que tem foco no tratamento de problemas relacionados à saúde. Quando voltada à saúde da mulher, busca o reequilíbrio de desarmonias em suas diferentes fases da vida, como no período menstrual, menopausa, gestação, pré e pós-parto, entre outras."
              }
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <EspecialidadesCard
              h3="Pilates"
              aText="Saiba Mais"
              img={michelle}
              altImg={"Foto da Dra. Michelle"}
              href={"#"}
              p={
                "É um método de exercícios que visa trabalhar a conexão entre mente e corpo. Sua prática traz benefícios como melhora da flexibilidade e da mobilidade, ganho de força muscular e alívio de dores. Oferecemos aulas de pilates com fisioterapeuta especializada, totalmente focadas para gestantes e mulheres no pós-parto."
              }
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam" id="time">
        <span className="spanLabelLeaked">Profissionais qualificadas</span>
        <h3>Nossa equipe de especialistas</h3>
        <div className="ourTeamCards">
          <BoxAnimation animation="top">
            <SpecCard
              h3="Juliana de Sá"
              img={juliana}
              p="Fisioterapeuta especializada em Saúde da Mulher e Instrutora do Método Pilates"
              span="CREFITO-3/226407-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher, Doula e Educadora Perinatal"
              span="CREFITO-3/221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Thays Roncato"
              img={thais}
              p="Fisioterapeuta especializada em Saúde da Mulher e Mestre em Ginecologia e Obstetrícia"
              span="CREFITO-3/296198-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Cibele Ferrari"
              img={cibele}
              p="Fisioterapeuta Acupunturista especializada em Saúde da Mulher e Gestantes"
              span="CREFITO-3/111858-F"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="ourSpace" id="ourSpace">
        <div className="titleCarrossel">
          <div className="titleCarrosselText">
            <span className="spanLabel">Localização acessível</span>
            <h3>Por dentro do nosso espaço</h3>
          </div>
          <div className="titleCarrosselLinks">
            <BoxAnimation animation="left">
              <NavLink to="/equipe" className="ctaBtn1">
                Mais sobre a equipe
              </NavLink>
            </BoxAnimation>
            <BoxAnimation animation="right">
              <a href="#" className="ctaBtn2">
                Fale com nossa equipe
              </a>
            </BoxAnimation>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Carrossel />
        </Suspense>
      </Container>

      <Container sectionClass="bgGoogle" mainClass="google">
        <span className="spanLabelLeaked">
          Todas as pacientes indicam a PELVIE!
        </span>
        <h2>Confira as nossas avaliações no Google</h2>
        <div className="cardsGoogle">
          <BoxAnimation animation="left">
            <GoogleCard
              h3="Sandra Spartani"
              p="A equipe é composta por mulheres extremamente simpáticas e dedicadas, o que contribui para um ambiente positivo e acolhedor. A simpatia da equipe é fundamental para estabelecer uma conexão com os pacientes, transmitindo confiança e conforto durante o processo de reabilitação. Eu recomendo!"
              googleHref="https://g.co/kgs/jGCJyad"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <GoogleCard
              h3="Danielle Oshiro"
              p="Escolhi a PELVIE pelo Google e por isso acho importante comentar, ajudando outras pessoas que estão buscando este tipo de tratamento. Excelentes profissionais, muito atenciosas e que me apoiaram durante minha gestação, a qual foi muito tranquila e sem queixas. Além do mais, a clínica é uma graça, bem nova, equipada e acolhedora."
              googleHref="https://g.co/kgs/UY9nRw6"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <GoogleCard
              googleHref="https://g.co/kgs/oNUwVi5 "
              h3="Beatriz Lopes"
              p="Minha experiência com a Pelvie não poderia ser melhor. Fiz fisio pélvica para o parto e quando chegou perto do prazo máximo meu corpo não dava sinais e meu bebê estava super alto, decidi fazer acupuntura com a Cibele. Em dois dias entrei em trabalho de parto! Tive um parto dos sonhos e mega rápido. Obrigada equipe por todo apoio e acolhimento!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <GoogleCard
              h3="Priscilla Sulzbacher"
              p="As meninas são uma graça! A Dra Thays teve muito cuidado, muita paciência nesse momento da gestação e sempre preocupada em proporcionar o máximo de conforto, olhando a paciente como um todo! Me deixou muito mais tranquila em relação ao parto, em saber o que esperar, e me ajudou com as dores dessa fase final!"
              googleHref="https://g.co/kgs/j6KMQyG"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <GoogleCard
              h3=" Gabriela Ikawa"
              p="Clínica cheirosa, equipamentos novos e com toda estrutura que precisamos, eu me sinto mt bem cuidada e relaxada quando estou lá. A Michele, fisio que me atende, é um amor de pessoa! Super atenciosa e profissional excelente no que faz. Recomendo a todas as gravidinhas que desejam se preparar para uma gestação saudável!"
              googleHref="https://g.co/kgs/xPZTH3Q"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <GoogleCard
              h3="Keila Fujikawa"
              p="Superou minhas expectativas tanto em relação ao profissionalismo e conduta do tratamento quanto pelo ambiente acolhedor, divertido e leve. A Ju, fisio que cuidou de mim (digo cuidou porque foi além de ser tratada como paciente) é uma profissional competente e incrível, super atualizada e extremamente acolhedora. Recomendo fortemente a Pelvie!"
              googleHref="https://g.co/kgs/5zF8Zsn"
            />
          </BoxAnimation>
        </div>
        <a
          href="https://www.google.com/search?q=pelvie+-+fisioterapia+p%C3%A9lvica+funcional&oq=Pelvie&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyDQgCEC4YrwEYxwEYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgwIBRAAGAoYsQMYgAQyBggGEEUYPTIGCAcQRRg90gEIMzQ1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94ce573422e3ce3f:0xf18457c7bf00ec3f,1,,,,"
          target="_blank"
          className="ctaBtn2"
        >
          Veja as avaliações no Google
        </a>
      </Container>

      <Container mainClass="googleMaps">
        <span className="spanLabel">Localização acessível</span>
        <h3>Venha nos fazer uma visita!</h3>
        <Suspense fallback={<Loader />}>
          <Maps />
        </Suspense>

        <div className="adressMaps">
          <div className="adressText">
            <h3>Endereço</h3>
            <a
              href="https://www.google.com/maps?ll=-23.613567,-46.69575&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17403131375481056319"
              target="_blank"
            >
              Rua James Watt 142, sala 42 – Brooklin - SP
            </a>
          </div>
          <div className="phoneMaps">
            <h3>Telefone</h3>
            <a href="tel:+5511913112992">(11) 91311-2992</a>
          </div>
        </div>

        <CtaCard
          animationBtnUm="right"
          animationBtnDois="left"
          p="Acolhimento, empatia e segurança: 
aqui os pacientes se sentem em casa!
"
        />
      </Container>
    </>
  );
};

export default Home;
