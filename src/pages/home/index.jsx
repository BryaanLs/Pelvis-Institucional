/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import Container from "../../components/container";
import "./styles.css";
import HeroCarrossel from "../../components/HeroCarrossel";
import EspecialidadesCard from "../../components/EspecialidadesCard";
import SpecCard from "../../components/specCard";
import michelle from "../../assets/img/michelle.png";
import michele from "../../assets/img/webp/michelle.png";
import BoxAnimation from "../../components/boxAnimation";
import { NavLink } from "react-router-dom";
import React from "react";
import Loader from "../../components/loader";
import CardHome from "../../components/card";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
import GoogleCard from "../../components/googleCard";
import CtaCard from "../../components/ctaCard";
const Maps = React.lazy(() => import("../../components/maps"));
const Carrossel = React.lazy(() => import("../../components/slider"));

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
              <span>Por que escolher a Clínica Pelvie?</span>
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
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container mainClass="especialidadesMain">
        <span className="spanLabel">Uma clínica acolhedora e agradável!</span>
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
                "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
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
                "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
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
                "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
              }
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam">
        <span className="spanLabelLeaked">
          Uma clínica acolhedora e agradável!
        </span>
        <h3>Nossa equipe de especialistas</h3>
        <div className="ourTeamCards">
          <BoxAnimation animation="top">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="ourSpace" id="ourSpace">
        <div className="titleCarrossel">
          <div className="titleCarrosselText">
            <span>Uma clínica acolhedora e agradável!</span>
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
        <React.Suspense fallback={<Loader />}>
          <Carrossel />
        </React.Suspense>
      </Container>

      <Container sectionClass="bgGoogle" mainClass="google">
        <span>Uma clínica acolhedora e agradável</span>
        <h2>Confira as nossas avaliações no Google</h2>
        <div className="cardsGoogle">
          <BoxAnimation animation="left">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <GoogleCard
              h3="Marcela Celi"
              p="Profissionais excelentes, carinhosas e com talento excepcional para
          conduzir tratamentos tão íntimos sem desconforto. Vou voltar em todas as
          minhas próximas 8 gestações e pós parto :)"
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
        <span>Uma clínica acolhedora e agradável!</span>
        <h3>Venha nos fazer uma visita!</h3>
        <React.Suspense fallback={<Loader />}>
          <Maps />
        </React.Suspense>

        <div className="adressMaps">
          <div className="adressText">
            <h3>Endereço</h3>
            <a
              href="https://www.google.com/maps?ll=-23.613567,-46.69575&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17403131375481056319"
              target="_blank"
            >
              Rua James Watt, 142 - Sala 42 - Cidade Monções, São Paulo - SP,
              04576-050
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
          p="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, "
        />
      </Container>
    </>
  );
};

export default Home;
