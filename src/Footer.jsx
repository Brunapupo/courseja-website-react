import React from "react";
import "./Footer.css";
import logofooterorigin from "./assets/logofooterorigin.ico";
import local from "./assets/local.svg";

import cel from "./assets/cel.svg";
import time from "./assets/time.svg";
import email from "./assets/email.svg";

function Footer() {
  return (
    <div>
      <div className="rodape">
        <div className="wave-1"></div>
        <div className="wave-2"></div>
        <div className="wave-3"></div>

        <div className="column-1">
          <div className="container-info">
            <div className="logo">
              <img src={logofooterorigin} alt="logo" />
            </div>
          </div>

          <div className="xy">
            <div className="local-icon">
              <img src={local} alt="Location" />
              <span className="local">localização</span>
            </div>
          </div>

          <div>
            <span className="info-lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </span>
          </div>

          <div className="bb">
            <div className="local-icon">
              <img src={cel} alt="cel" />
              <span className="local">Tel:+9229341037</span>
            </div>
          </div>

          <div>
            <div>
              <div className="time-icon time">
                <img src={time} alt="time" />
                <span className="local">Horário de resposta: 8 às 20</span>
              </div>
            </div>

            <div>
              <div className="email-icon email">
                <img src={email} alt="email" />
                <span>Email: info@courseja.com</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="sobre">
            <span>Sobre</span>
          </div>
          <div>
            <div className="ajuda">
              <span>Central de ajuda</span>
            </div>
          </div>

          <div>
            <div className="apoio">
              <span>Cumunidade de apoio</span>
            </div>
          </div>

          <div>
            <div className="historia">
              <span>Compartilhe sua história</span>
            </div>
          </div>

          <div>
            <div className="impacto">
              <span>Impacto</span>
            </div>
          </div>

          <div>
            <div className="equipe">
              <span>Nossa equipe</span>
            </div>
          </div>
        </div>

        <div>
          <div className="email-notif">
            <span>
              Fique por dentro dos cursos mais recentes com notificações por
              e-mail!
            </span>
          </div>
          <div className="email-input">
            <input
              type="text"
              placeholder="Seu e-mail"
              className="transparent-label"
            />
            <button className="button-email">Inscrever-se</button>
          </div>
        </div>
      </div>
      <div>
        <footer className="desenvolvedora">Desenvolvido por Bruna Pupo</footer>
      </div>
    </div>
  );
}

export default Footer;