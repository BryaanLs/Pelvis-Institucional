import React from "react";
import "./styles.css";
import Container from "../../components/container";
const PlayerVideo = React.lazy(() => import("../../components/playerVideo"));
import Loader from "../../components/loader";
import Card from "../../components/card";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
import BoxAnimation from "../../components/boxAnimation";
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

      <Container></Container>
    </>
  );
};

export default QuemSomos;
