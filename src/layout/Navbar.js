import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Container from "./Container";
import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img src={Logo} alt="courseja" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/">Cursos</Link>
          </li>
          <li className="item2">
            <Link to="/">Faça uma doação</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
