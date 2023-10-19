import React from "react";
import GroupAlura from "./assets/GroupAlura.svg";
import "./Banner.css";

function Banner() {
  return (
    <main className="apresentacao">
      <section class="apresentacao__conteudo">
        <h1 class="apresentacao__conteudo__titulo">
          Supletivo EJA ONLINE
          <div>
            <strong class="titulo-destaque">Ensino Fundamental e Médio.</strong>
          </div>
        </h1>
        <p class="apresentacao__conteudo__texto">
          Conquiste o seu certificado de Ensino Médio com a COURSEJA. Explore
          uma ampla variedade de cursos, todos disponíveis em uma única
          plataforma e totalmente gratuitos. Após a conclusão de todos os
          cursos, você receberá o certificado de Ensino Médio. Aproveite essa
          oportunidade educacional abrangente e acessível!
        </p>
      </section>
      <img
        className="apresentacao__imagem"
        src={GroupAlura}
        alt="Foto do Banner"
      ></img>
    </main>
  );
}

export default Banner;
