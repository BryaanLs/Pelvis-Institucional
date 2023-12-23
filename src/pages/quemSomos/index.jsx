import React from "react";
import "./styles.css";
import Container from "../../components/container";
const PlayerVideo = React.lazy(() => import("../../components/playerVideo"));
import Loader from "../../components/loader";
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
    </>
  );
};

export default QuemSomos;
