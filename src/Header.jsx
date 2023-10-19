import React from "react";
import "./Header.css";
import Logo from "./assets/Logo.svg";

function Header() {
  return (
    <div>
      <header class="cabecalho">
        <nav class="cabecalho__menu">
          <ul>
            <img className="header-logo" src={Logo} alt="logotipo do site" />

            <button className="button-home">Home</button>

            <button className="button-blog">Blog</button>

            <button className="button-blog">Cursos</button>
            <button className="flex button button-style-1">LOG IN</button>
            <button className="flex button button-style-2">CADASTRAR-SE</button>
            <button className="flex button button-style-3">
              FAÇA UMA DOAÇÃO
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
