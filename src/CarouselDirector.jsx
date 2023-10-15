import React from "react";
import { useRef } from "react";
import "./CarouselDirector.css";
import chevron_icon from "./assets/chevron_icon.png";

import carrosel_1 from "./assets/carrosel_1.svg";
import carousel_2 from "./assets/carousel_2.jpg";
import carousel_3 from "./assets/carousel_3.svg";
import carousel_4 from "./assets/carousel_4.svg";
import carousel_5 from "./assets/carousel_5.svg";

import estudantes_1 from "./assets/estudantes_1.svg";
import estudantes_2 from "./assets/estudantes_2.svg";
import estudantes_3 from "./assets/estudantes_3.svg";

import math from "./assets/matf.jpg";
import cubismo from "./assets/cubismo.jpg";
import ingles from "./assets/ingles.png";
import history from "./assets/history.png";
import literatura from "./assets/literatura.png";

import desenho from "./assets/desenho.jpg";
import sociologia from "./assets/sociologia.png";
import fisica from "./assets/fisica.jpg";

function CarouselDirector() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {/* Primeiro card*/}
        <div className="item">
          <div className="image">
            <img src={math} alt="Curso 1" />
            <div className="imagem-estudantes">
              <img src={estudantes_1} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data"> 11 - 28 julho 2022</span>
            <span className="info-titulo">Matemática </span>
            <span className="info-descricao">
              Curso de Matemática para o Ensino Fundamental no EJA (Educação de
              Jovens e Adultos): Reforce seus conhecimentos matemáticos e
              alcance o sucesso acadêmico no seu próprio sucesso acadêmico no
              seu próprio ritmo.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>

        {/* Segundo card*/}
        <div className="item">
          <div className="image">
            <img src={carousel_2} alt="Curso 2" />
            <div className="imagem-estudantes">
              <img src={estudantes_2} alt="estudantes 2" />
            </div>
          </div>
          <div>
            <span className="data">1 - 28 julho 2022</span>
            <span className="info-titulo">Português</span>
            <span className="info-descricao">
              Aprimore suas habilidades em português, voltado para adultos no
              Ensino de Jovens e Adultos (EJA). Aprenda leitura, escrita,
              gramática e comunicação oral. Flexibilidade de aprendizado e
              preparação para certificação.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>

        {/* Terceiro card*/}
        <div className="item">
          <div className="image">
            <img src={desenho} alt="Curso 3" />
            <div className="imagem-estudantes">
              <img src={estudantes_2} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">7 - 10 abril 2023</span>
            <span className="info-titulo">Desenho</span>
            <span className="info-descricao">
              Liberte sua criatividade com o curso de desenho. Aprenda técnicas,
              explore seu estilo e dê vida às suas ideias. Domine traços,
              sombras e perspectivas. Expresse-se por meio da arte do desenho.
              Este curso é uma jornada de autoexpressão.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>

        {/* Quarto card*/}
        <div className="item">
          <div className="image">
            <img src={cubismo} alt="Curso 4" />
            <div className="imagem-estudantes">
              <img src={estudantes_2} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">11 - 03 dez 2023</span>
            <span className="info-titulo">Arte</span>
            <span className="info-descricao">
              Descubra o mundo do Cubismo na arte brasileira, uma jornada
              criativa. Aprenda a desconstruir e reinventar formas, cores e
              perspectivas. Desenvolva sua expressão artística e mergulhe na
              história da vanguarda artística brasileira.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>
        {/* Quinto card*/}
        <div className="item">
          <div className="image">
            <img src={carousel_5} alt="Curso 5" />
            <div className="imagem-estudantes">
              <img src={estudantes_3} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">5 - 28 jan 2020</span>
            <span className="info-titulo">Python</span>
            <span className="info-descricao">
              Domine Python, a linguagem de programação popular. Desenvolva
              habilidades de codificação e crie aplicativos e soluções
              poderosas. Descubra o mundo da programação com Python e inicie sua
              jornada para se tornar um desenvolvedor.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>
        {/* Sexto card*/}
        <div className="item">
          <div className="image">
            <img src={literatura} alt="Curso 6" />
            <div className="imagem-estudantes">
              <img src={estudantes_1} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">25 - 2 julho 2020</span>
            <span className="info-titulo">Literatura</span>
            <span className="info-descricao">
              Explore as ricas narrativas e estilos literários. Aprofunde-se na
              análise de clássicos e contemporâneos, ampliando sua compreensão
              literária. Desenvolva sua apreciação pela escrita e interpretação
              de textos, explorando o mundo da literatura.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>
        {/* Setimo card*/}
        <div className="item">
          <div className="image">
            <img src={history} alt="Curso 7" />
            <div className="imagem-estudantes">
              <img src={estudantes_3} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">14 - 10 julho 2023</span>
            <span className="info-titulo">History</span>
            <span className="info-descricao">
              Viaje no tempo através do estudo da história. Descubra eventos,
              culturas e sociedades que moldaram o mundo. Analise marcos
              históricos e compreenda o contexto que influenciou o presente.
              Desvende o passado e suas conexões com o presente.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>
        {/* Oitavo card*/}
        <div className="item">
          <div className="image">
            <img src={ingles} alt="Curso 8" />
            <div className="imagem-estudantes">
              <img src={estudantes_1} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">1 - 28 julho 2022</span>
            <span className="info-titulo">Inglês</span>
            <span className="info-descricao">
              Melhore suas habilidades linguísticas, fluência e confiança.
              Desfrute de aulas interativas e práticas que o levarão a dominar o
              inglês de maneira eficaz. Prepare-se para o sucesso global com
              fluência em inglês.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>

        {/* Nono card*/}
        <div className="item">
          <div className="image">
            <img src={carousel_4} alt="Curso 9" />
            <div className="imagem-estudantes">
              <img src={estudantes_3} alt="estudantes 3" />
            </div>
          </div>
          <div>
            <span className="data">3 - 12 maio 2019</span>
            <span className="info-titulo">A Ciência do Bem-Estar</span>
            <span className="info-descricao">
              Desenvolva equilíbrio e saúde com foco na mente e corpo. Aprenda
              práticas para melhorar a qualidade de vida, incorporando
              exercícios, relaxamento e nutrição.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>

        {/* Décimo card*/}
        <div className="item">
          <div className="image">
            <img src={fisica} alt="Curso 9" />
            <div className="imagem-estudantes">
              <img src={estudantes_3} alt="estudantes 1" />
            </div>
          </div>
          <div>
            <span className="data">1 - 28 julho 2022</span>
            <span className="info-titulo">Física</span>
            <span className="info-descricao">
              Explore o fascinante mundo da física. Este curso oferece uma
              compreensão aprofundada das leis que governam o universo. Das
              partículas subatômicas à mecânica quântica, você desvendará os
              segredos do cosmos.
            </span>
          </div>
          <div>
            <span className="span-button">
              <button className="button-matricule-se">
                <span>MATRICULE-SE</span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src={chevron_icon} alt="icone carousel" />
        </button>
        <button onClick={handleRightClick}>
          <img src={chevron_icon} alt="icone carousel right" />
        </button>
      </div>
    </div>
  );
}

export default CarouselDirector;
