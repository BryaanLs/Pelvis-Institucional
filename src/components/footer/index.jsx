/* eslint-disable react/jsx-no-target-blank */
// import React from "react";

import Logo from "../../assets/img/svgs/footerLogo.svg";
import icoInsta from "../../assets/img/svgs/iconInstagram.svg";
import icoWhats from "../../assets/img/svgs/iconWhatsapp.svg";

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
            <NavLink to="/Tratamento">Tratamentos</NavLink>
            <NavLink to="/ComoFunciona">Como Funciona</NavLink>
          </nav>
        </div>

        <div className="contatoFooter">
          <h3>Contato</h3>

          <a href="mailto:clinica@gmail.com" target="_blank">
            clinica@gmail.com
          </a>
          <a href="tel:+5511913112992" target="_blank">
            (11) 91311-2992
          </a>
          <a
            href="https://www.google.com/maps?ll=-23.613567,-46.69575&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17403131375481056319"
            target="_blank"
          >
            Rua James Watt, 142, Sala 42, Brooklin, São Paulo - SP CEP 04576-050
          </a>
        </div>

        <div className="funcionamentoFooter">
          <div className="horarioFooter">
            <h3>Horário de funcionamento</h3>
            <p>
              Segunda a Sexta das 7h às 21h
              <br />
              Sábados das 8h às 14h.
            </p>
          </div>
          <div className="iconesFooter">
            <nav>
              <a
                href="https://www.instagram.com/pelviefisioterapia?igsh=cTg1d3NxejRnbTNs"
                target="_blank"
              >
                <img src={icoInsta} alt="icone do instagram" />
              </a>
              <a href="https://wa.link/ibbufu" target="_blank">
                <img src={icoWhats} alt="icone do whatsapp" />
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
