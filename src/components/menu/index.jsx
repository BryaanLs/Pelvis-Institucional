/* eslint-disable react/prop-types */
import "./styles.css";
import { NavLink } from "react-router-dom";
import logoBranca from "/src/assets/img/svgs/logoBranca.svg";
import setaBtn from "../../assets/img/svgs/setaIconMenu.svg";
import { useEffect, useState } from "react";
import insta from "../../assets/img/svgs/instagram.svg";
import whats from "../../assets/img/svgs/whatsapp.svg";

const Menu = ({ openMenu, setOpenMenu }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  function closeMenu() {
    setOpenMenu(false);
  }
  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        background: scrollPosition === 0 ? "var(--roxo5)" : "var(--roxo7)",
      }}
      className={`${openMenu ? "header" : "headerClosed"}`}
    >
      <div className="headerContent mainContent">
        <img
          className="logoColoridaDesktop"
          src={logoBranca}
          alt="logo pelvie"
          width="150"
        />
        {openMenu && (
          <div className="navigationTextMenu">
            <img src={logoBranca} alt="logo pelvie" width="150" />
            <span>Navegação</span>
            <h3>O que você deseja fazer?</h3>
          </div>
        )}
        <nav className="navMenu navMenuHeader">
          <NavLink to="/" end onClick={closeMenu}>
            Página Inicial
          </NavLink>
          <NavLink to="QuemSomos" onClick={closeMenu}>
            Quem Somos
          </NavLink>
          <NavLink to="Tratamento" onClick={closeMenu}>
            Tratamentos
          </NavLink>
          <NavLink to="ComoFunciona" onClick={closeMenu}>
            Como Funciona
          </NavLink>
        </nav>

        <div className="contato">
          <a href="#">
            <img src={insta} alt="logo do instagram" width="43" height="42" />
          </a>
          <a href="#">
            <img src={whats} alt="logo do whatsapp" width="43" height="42" />
          </a>
        </div>
        {openMenu && (
          <div className="footerMenuMobile">
            <div className="buttonsFooterMenu">
              <a href="#">
                Fale Conosco
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
              <a href="/#ourSpace">
                Nossa Clínica
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
            </div>
            <div className="textFooterMenu">
              <div>
                <h3>Atendimento</h3>
                <p>Seg à Sex - 8h às 18h</p>
              </div>
              <div>
                <h3>Endereço</h3>
                <p>Rua James Watt, 142 - Sala 42 Cidade Monções, São Paulo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
