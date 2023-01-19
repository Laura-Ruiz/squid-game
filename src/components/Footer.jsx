import React from "react";
import styled from "styled-components";
import { fontLightColor } from "../utils/colors";
export default function Footer() {
  return (
    <FooterContainer className="defaultMargin">
      <ul>
        <li>
          <a href="/">Preguntas frecuentes</a>
        </li>
        <li>
          <a href="/">Centro de ayuda</a>
        </li>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Zona de prensa</a>
        </li>
        <li>
          <a href="/">Inversores</a>
        </li>
        <li>
          <a href="/">Empleo</a>
        </li>
        <li>
          <a href="/">Formas de ver</a>
        </li>
        <li>
          <a href="/">Términos de uso</a>
        </li>
        <li>
          <a href="/">Privacidad</a>
        </li>
        <li>
          <a href="/">Preferencias de cookies</a>
        </li>
        <li>
          <a href="/">Información corporativa</a>
        </li>
        <li>
          <a href="/">Contáctanos</a>
        </li>
        <li>
          <a href="/">Prueba de velocidad</a>
        </li>
        <li>
          <a href="/">Avisos legales</a>
        </li>
        <li>
          <a href="/">Solo en Netflix</a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${fontLightColor};
  margin: 0 5rem;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 18rem;
    row-gap: 2rem;
    list-style-type: none;
    li {
      a {
        text-transform: uppercase;
        color: ${fontLightColor};
        text-decoration: none;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    ul {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;