// import Accordion from "../../components/accordion";
import Container from "../../components/container";
import "./styles.css";
import Accordion from "../../components/accordion";
import BoxAnimation from "../../components/boxAnimation";
import gravida from "../../assets/img/svgs/gravida.svg";
import whatsappPurple from "../../assets/img/svgs/wppPurple.svg";
import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import acupuntura from "../../assets/img/svgs/acupuntura.svg";
import pilates from "../../assets/img/svgs/pilates.svg";
import groupIco from "../../assets/img/svgs/groupIco.svg";
import { NavLink } from "react-router-dom";
import CtaCard from "../../components/ctaCard";

const ComoFunciona = () => {
  return (
    <>
      <Container sectionClass="bgHeroComoFunciona" />

      <Container mainClass="acc accRoxo">
        <div className="accTitle">
          <span>Tratamento pélvico</span>
          <h2>
            Fisioterapia Pélvica{" "}
            <img src={gravida} alt="icone de uma mulher grávida" />
          </h2>
          <p>
            Confira detalhadamente todos os tratamentos aplicados na recuperação
            aqui na clínica Pélvie
          </p>
        </div>

        <BoxAnimation animation="bottom">
          <Accordion title="Os Tratamentos da Fisioterapia Pélvica">
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni ad sunt beatae quis quaerat consectetur consequuntur
                  alias laudantium. Maiores tempora ducimus quo laboriosam
                  voluptatum, harum dolorem inventore. Eius, aperiam earum.
                </p>
              </li>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Quis nostrum perferendis consectetur, corrupti optio quisquam
                  ipsum expedita dolorum obcaecati iure, exercitationem odio hic
                  earum fugiat perspiciatis nemo rerum nisi at! Quasi doloribus
                  aperiam dicta qui facere nam ut.
                </p>
              </li>
            </ul>
          </Accordion>
        </BoxAnimation>

        <BoxAnimation animation="bottom">
          <Accordion title="Os Tratamentos da Fisioterapia Pélvica">
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni ad sunt beatae quis quaerat consectetur consequuntur
                  alias laudantium. Maiores tempora ducimus quo laboriosam
                  voluptatum, harum dolorem inventore. Eius, aperiam earum.
                </p>
              </li>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Quis nostrum perferendis consectetur, corrupti optio quisquam
                  ipsum expedita dolorum obcaecati iure, exercitationem odio hic
                  earum fugiat perspiciatis nemo rerum nisi at! Quasi doloribus
                  aperiam dicta qui facere nam ut.
                </p>
              </li>
            </ul>
          </Accordion>
        </BoxAnimation>

        <div className="ctaAcc">
          <a href="#">
            Agendar fisioterapia Pélvica{" "}
            <img src={whatsappPurple} alt="Logo do whatsapp" />
          </a>
          <p>
            Ou <a href="#">ligue</a> para nossa equipe
          </p>
        </div>
      </Container>

      <Container mainClass="acc accVerde">
        <div className="accTitle">
          <span>Tratamento pélvico</span>
          <h2>
            Fisioterapia Pélvica
            <img src={acupuntura} alt="icone de uma mulher grávida" />
          </h2>
          <p>
            Confira detalhadamente todos os tratamentos aplicados na recuperação
            aqui na clínica Pélvie
          </p>
        </div>
        <BoxAnimation animation="bottom">
          <Accordion
            type="accordionVerde"
            title="Os Tratamentos da Fisioterapia Pélvica"
            corBolinha="verde"
          >
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni ad sunt beatae quis quaerat consectetur consequuntur
                  alias laudantium. Maiores tempora ducimus quo laboriosam
                  voluptatum, harum dolorem inventore. Eius, aperiam earum.
                </p>
              </li>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Quis nostrum perferendis consectetur, corrupti optio quisquam
                  ipsum expedita dolorum obcaecati iure, exercitationem odio hic
                  earum fugiat perspiciatis nemo rerum nisi at! Quasi doloribus
                  aperiam dicta qui facere nam ut.
                </p>
              </li>
            </ul>
          </Accordion>
        </BoxAnimation>

        <BoxAnimation animation="bottom">
          <Accordion
            type="accordionVerde"
            title="Os Tratamentos da Fisioterapia Pélvica"
            corBolinha="verde"
          >
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <BoxAnimation animation="left">
                <li>
                  <h4>Tratamento da Fisioterapia</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni ad sunt beatae quis quaerat consectetur consequuntur
                    alias laudantium. Maiores tempora ducimus quo laboriosam
                    voluptatum, harum dolorem inventore. Eius, aperiam earum.
                  </p>
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                {" "}
                <li>
                  <h4>Tratamento da Fisioterapia</h4>
                  <p>
                    Quis nostrum perferendis consectetur, corrupti optio
                    quisquam ipsum expedita dolorum obcaecati iure,
                    exercitationem odio hic earum fugiat perspiciatis nemo rerum
                    nisi at! Quasi doloribus aperiam dicta qui facere nam ut.
                  </p>
                </li>
              </BoxAnimation>
            </ul>
          </Accordion>
        </BoxAnimation>

        <div className="ctaAcc ctaAccVerde">
          <a href="#">
            Agendar fisioterapia Pélvica{" "}
            <img src={whatsappGreen} alt="Logo do whatsapp" />
          </a>
          <p>
            Ou <a href="#">ligue</a> para nossa equipe
          </p>
        </div>
      </Container>

      <Container mainClass="acc accRoxo">
        <div className="accTitle">
          <span>Tratamento pélvico</span>
          <h2>
            Pilates
            <img src={pilates} alt="icone de uma mulher grávida" />
          </h2>
          <p>
            Confira detalhadamente todos os tratamentos aplicados na recuperação
            aqui na clínica Pélvie
          </p>
        </div>

        <BoxAnimation animation="bottom">
          <Accordion title="Os Tratamentos da Fisioterapia Pélvica">
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni ad sunt beatae quis quaerat consectetur consequuntur
                  alias laudantium. Maiores tempora ducimus quo laboriosam
                  voluptatum, harum dolorem inventore. Eius, aperiam earum.
                </p>
              </li>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Quis nostrum perferendis consectetur, corrupti optio quisquam
                  ipsum expedita dolorum obcaecati iure, exercitationem odio hic
                  earum fugiat perspiciatis nemo rerum nisi at! Quasi doloribus
                  aperiam dicta qui facere nam ut.
                </p>
              </li>
            </ul>
          </Accordion>
        </BoxAnimation>

        <BoxAnimation animation="bottom">
          <Accordion title="Os Tratamentos da Fisioterapia Pélvica">
            <h3>Os tratamentos da Fisioterapia Pélvica</h3>
            <p>
              Lorem ipsum dolor sit amet. Eum repudiandae nihil sed voluptatem
              optio sed vitae sunt id quasi iusto sit ullam ipsum. Sit amet
              adipisci a dicta iure et laboriosam nemo et commodi itaque. 33
              nemo pariatur est sequi asperiores qui magni enim et placeat
              consectetur est quia similique hic error alias qui architecto
              accusantium. Eos dolorem quia ex provident quas et quisquam dicta
              rem enim quam ut harum eligendi. Ab doloribus enim sed corporis
              perferendis qui alias consequatur ut rerum tempore. Ab similique
              quia ea Quis iste cum dolorem voluptates? Est animi corrupti in
              quos facilis ea voluptatibus expedita et molestias internos nam
              doloribus voluptatum. Ut blanditiis molestias vel nemo suscipit 33
              sint tempora.
            </p>
            <ul>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni ad sunt beatae quis quaerat consectetur consequuntur
                  alias laudantium. Maiores tempora ducimus quo laboriosam
                  voluptatum, harum dolorem inventore. Eius, aperiam earum.
                </p>
              </li>
              <li>
                <h4>Tratamento da Fisioterapia</h4>
                <p>
                  Quis nostrum perferendis consectetur, corrupti optio quisquam
                  ipsum expedita dolorum obcaecati iure, exercitationem odio hic
                  earum fugiat perspiciatis nemo rerum nisi at! Quasi doloribus
                  aperiam dicta qui facere nam ut.
                </p>
              </li>
            </ul>
          </Accordion>
        </BoxAnimation>

        <div className="ctaAcc">
          <a href="#">
            Agendar fisioterapia Pélvica{" "}
            <img src={whatsappPurple} alt="Logo do whatsapp" />
          </a>
          <p>
            Ou <a href="#">ligue</a> para nossa equipe
          </p>
        </div>
      </Container>

      <Container
        sectionClass="bgTeam sectionPresentationTeam"
        mainClass="presentationTeam"
      >
        <div>
          <span>Nossas profissionais</span>
          <h2>
            Conheça nossa equipe
            <img src={groupIco} alt="icone de 3 pessoas juntas" />
          </h2>
        </div>

        <NavLink className="cta" to="/QuemSomos">
          Veja a especialização da equipe
        </NavLink>
      </Container>

      <Container>
        <CtaCard p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae quaerat sit odit aliquam repellendus eius amet, modi quae itaque, vel dolores. Cumque totam, dolor ad officiis illo esse vero!" />
      </Container>
      {/* <Container sectionClass="bgTeam" /> */}
    </>
  );
};

export default ComoFunciona;
