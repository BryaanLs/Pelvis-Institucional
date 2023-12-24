import React from "react";
import "./styles.css";
import Container from "../../components/container";
const PlayerVideo = React.lazy(() => import("../../components/playerVideo"));
import Loader from "../../components/loader";
import Card from "../../components/card";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
import BoxAnimation from "../../components/boxAnimation";
import Curriculum from "../../components/curriculum";
import michelle from "../../assets/img/webp/michelle.webp";
import CtaCard from "../../components/ctaCard";
const QuemSomos = () => {
  return (
    <>
      <Container
        sectionClass="bgHeroQuemSomos"
        mainClass="heroQuemSomosContent"
      >
        <div className="quemSomosVideo">
          <React.Suspense fallback={<Loader />}>
            <PlayerVideo />
          </React.Suspense>
        </div>

        <div className="quemSomosCards">
          <div className="heroCard">
            <h2>Nossa Missão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dolor, atque expedita quisquam neque repudiandae sit distinctio
              amet magnam adipisci vel, aliquam voluptas temporibus molestias?
              Natus veritatis praesentium voluptas autem.
            </p>
          </div>

          <div className="heroCard">
            <h2>Nossa Missão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dolor, atque expedita quisquam neque repudiandae sit distinctio
              amet magnam adipisci vel, aliquam voluptas temporibus molestias?
              Natus veritatis praesentium voluptas autem.
            </p>
          </div>
        </div>
      </Container>

      <Container mainClass="ourValues">
        <h2>Nossos Valores</h2>
        <div className="ourValuesCards">
          <BoxAnimation animation="left">
            <Card
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <Card
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <Card
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <Card
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <Card
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="bgTeam" />

      <Container mainClass="professionalDescription">
        <span>Uma clínica acolhedora e agradável!</span>
        <h2>Conheça as profissionais da nossa clínica</h2>
      </Container>

      <Container sectionClass="bgCurriculumNoPic">
        <Curriculum
          a="Veja os tratamentos"
          aUrl="#"
          altImg="Foto da Dra.Tal"
          h2="Dra. Juliana"
          img={michelle}
        >
          <p>
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
          </p>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculum">
        <Curriculum
          a="Veja os tratamentos"
          aUrl="#"
          altImg="Foto da Dra.Tal"
          h2="Dra. Juliana"
          img={michelle}
          addClass="reverse"
        >
          <p>
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
          </p>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculumNoPic">
        <Curriculum
          a="Veja os tratamentos"
          aUrl="#"
          altImg="Foto da Dra.Tal"
          h2="Dra. Juliana"
          img={michelle}
        >
          <p>
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
            Ajudar a <b>restaurar a função normal</b> e fortalecer os músculos
            do assoalho pélvico. Eles <b>desempenham um papel fundamental</b> no
            suporte dos órgãos pélvicos, controle da micção, da defecação e na
            função sexual. Ajudar a <b>restaurar a função normal</b> e
            fortalecer os músculos do assoalho pélvico. Eles{" "}
            <b>desempenham um papel fundamental</b> no suporte dos órgãos
            pélvicos, controle da micção, da defecação e na função sexual.
          </p>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculum">
        <CtaCard a="Reservar um horário" animation="right" />
      </Container>
    </>
  );
};

export default QuemSomos;
