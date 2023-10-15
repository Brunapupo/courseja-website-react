import React from "react";
import "./CarouselCourses.css";
import Vector_titulo from "./assets/Vector_titulo.svg";

function CarouselCourses() {
  return (
    <div>
      <div>
        <h1 className="titulo_cursos">Cursos Populares</h1>
        <img className="vector" src={Vector_titulo} alt="Vector_titulo" />
      </div>

      <div className="botao-cont">
        <button className="button-1">Python</button>
        <button className="button-2">Português</button>
        <button className="button-2">Matemática</button>
        <button className="button-2">Inglês</button>
        <button className="button-2">Biologia</button>
        <button className="button-2">Química</button>
        <button className="button-2">Física</button>
        <button className="button-2">História</button>
        <button className="button-2">Desenho</button>
        <button className="button-2">Sociologia</button>
      </div>
    </div>
  );
}

export default CarouselCourses;
