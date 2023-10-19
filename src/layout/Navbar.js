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
            <Link to="/">Doação</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
