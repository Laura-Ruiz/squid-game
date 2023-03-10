import React from "react";
import styled from "styled-components";
import { blue } from "../utils/colors";

export default function Info() {
  return (
    <Section id="info" className="defaultMargin">
      <div className="square"></div>
      <div className="info" style={{margin: "5px 0 0 20px"}}>
        <div className="title">
          <ul>
            <li>2021</li>
            <li>16+</li>
            <li>1 Temporada</li>
            <li>Dramas TV</li>
          </ul>
        </div>
        <div className="details">
          <p className="border-top">
          Cientos de personas con problemas de dinero aceptan una invitación rarísima para competir en juegos infantiles. Dentro los esperan un tentador premio y desafíos letales.
          </p>
          <div className="border-top">
            <p>Protagonizada por</p>
            <ul>
              <li>Lee Jung-jae</li>
              <li>Park Hae-soo</li>
              <li>Wi Ha-jun</li>
            </ul>
          </div>
          <div className="border-top">
            <p>Creada por</p>
            <ul>
              <li>Hwang Dong-hyuk</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
   grid-template-columns: 40% 60%;
  color: #c0c0c0;
  .square {
    height: 7rem;
    width: 7rem;
    border: 14px solid ${blue};
    margin: 3rem 0px 50px 5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .title {
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        li {
          border-right: 1px solid #c0c0c0;
          padding-right: 2rem;
          &:last-of-type {
            border: none;
            padding: 0;
          }
        }
      }
    }
    .details {
      .border-top {
        border-top: 0.03rem solid #c0c0c0;
        padding: 2rem 0;
        display: flex;
        align-items: center;
      }
      p {
        width: 60%;
      }
      div {
        width: 60%;
        display: flex;
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
      .title {
        ul {
          gap: 3vw;
          li {
            padding-right: 1rem;
            white-space: nowrap;
          }
        }
      }
      .details {
        p,div {
          width: 100%;
      }
      div {
        p {
          width: 50%;
        }
      }
    }
  }
}`
