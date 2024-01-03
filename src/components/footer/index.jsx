// import React from "react";

import Logo from "../../assets/img/svgs/footerLogo.svg";
import icoInsta from "../../assets/img/svgs/iconInstagram.svg";
import icoWhats from "../../assets/img/svgs/iconWhatsapp.svg";
import icoFace from "../../assets/img/svgs/iconFacebook.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerItems">
        <div className="logoFooter">
          <img src={Logo} alt="logo da pelvie" />
        </div>

        <div className="navFooter">
          <h3>Navegação</h3>
          <nav>
            <NavLink to="/" end>
              Página Inicial
            </NavLink>
            <NavLink to="/QuemSomos">Quem Somos</NavLink>
            <NavLink to="/Tratamento">Tratamento</NavLink>
            <NavLink to="/ComoFunciona">Como Funciona</NavLink>
          </nav>
        </div>

        <div className="contatoFooter">
          <h3>Contato</h3>
          <p>clinica@gmail.com</p>
          <p>(11)91311-2992</p>
          <p>
            Rua James Watt, 142, Sala 42, Brooklin, São Paulo - SP CEP 04576-050
          </p>
        </div>

        <div className="funcionamentoFooter">
          <div className="horarioFooter">
            <h3>Horário de funcionamento</h3>
            <p>Segunda a Sexta das 7h às 21h Sábados das 8h às 14h.</p>
          </div>
          <div className="iconesFooter">
            <nav>
              <a href="#" target="_blank">
                <img src={icoInsta} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={icoWhats} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={icoFace} alt="" />
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="footDescription mainContent">
        <p>2023 - Todos os direitos reservados</p>
        <p>
          Desenvolvido por <a href="https://nextfusion.tech">Next Fusion</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
