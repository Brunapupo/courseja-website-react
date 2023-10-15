import React from "react";
import "./Header.css";
import Logo from "./assets/Logo.svg";
import header_imagem_4 from "./assets/header_imagem_4.svg";

function Header() {
  return (
    <div>
      <header id="header" className="header">
        <div className="containerHeader">
          <div className="flex">
            <img className="header-logo" src={Logo} alt="logotipo do site" />
          </div>

          <nav>
            <ul>
              <button className="button-home">Home</button>

              <button className="button-blog">Blog</button>

              <button className="button-blog">Cursos</button>

              <button className="flex button button-style-1">LOG IN</button>
              <button className="flex button button-style-2">
                CADASTRAR-SE
              </button>
              <button className="flex button button-style-3">
                FAÇA UMA DOAÇÃO
              </button>
            </ul>
          </nav>
        </div>
      </header>

      <section className="banner">
        <img src={header_imagem_4} alt="imagem do header" />
      </section>
    </div>
  );
}

export default Header;
