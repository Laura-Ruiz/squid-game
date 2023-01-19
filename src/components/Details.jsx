import React from "react";
import styled from "styled-components";
import details from "../assets/DETAILS.png";
import { fontLightColor, blue } from "../utils/colors";
export default function Details() {
  return (
    <Section id="details" className="defaultMargin">
      <div className="square"></div>
      <div className="info">
        <div className="image">
          <img src={details} alt="details" />
        </div>
        <div className="details">
          <div className="border-top">
            <p>Ver sin conexión</p>
            <p>Disponible para descargar</p>
          </div>
          <div className="border-top">
            <p>Géneros</p>
            <ul>
              <li>Coreanas</li>
              <li>Thrillers TV</li>
              <li>Dramas TV</li>
            </ul>
          </div>
          <div className="border-top">
            <p>Pertenece a...</p>
            <p>Suspense</p>
          </div>
          <div className="border-top">
            <p>Reparto</p>
            <ul>
              <li>Lee Jung-jae</li>
              <li>Park Hae-soo</li>
              <li>Wi Ha-jun</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  color: ${fontLightColor};
  .square {
    height: 9rem;
    width: 9rem;
    border: 18px solid ${blue};
    margin: 8rem 0 0 7rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    img {
      margin-bottom: 4rem;
    }
    .details {
      .border-top {
        border-top: 0.1rem solid ${fontLightColor};
        padding: 2rem 0;
        display: flex;
        align-items: center;
      }
      div {
        width: 60%;
        display: flex;
        gap: 10rem;
        p {
          min-width: 10rem;
        }
        ul {
          list-style-type: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: block;
    margin: 0 5vw;
    .info {
      gap: 0rem;
      img {
        width: 100%;
        margin-bottom: 2rem;
      }
      .details {
        div {
          width: 100%;
          gap: 3rem;
          p {
            min-width: 7rem;
          }
        }
      }
    }
  }
`;