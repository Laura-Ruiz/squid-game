import React from "react";
import styled from "styled-components";
import Episode1 from "../assets/EPISODE1.jpg";
import Episode2 from "../assets/EPISODE2.jpg";
import Episode3 from "../assets/EPISODE3.jpg";
import Episode4 from "../assets/EPISODE4.jpg";
import Episode5 from "../assets/EPISODE5.jpg";
import Episode6 from "../assets/EPISODE6.jpg";
import Episode7 from "../assets/EPISODE7.jpg";
import Episode8 from "../assets/EPISODE8.jpg";
import Episode9 from "../assets/EPISODE9.jpg";
import EpisodesImage from "../assets/EPISODES.png";
import { blue } from "../utils/colors";
export default function Episodes() {
  const episodesData = [
    {
      episodeName: "1. Luz roja, luz verde",
      episodeInfo:
        "El arruinado y desesperado Gi-hun acepta participar en un enigmático juego con la intención de ganar dinero fácil. Ya en la primera ronda se desata el horror.",
      episodeImage: Episode1,
    },
    {
      episodeName: "2. Infierno",
      episodeInfo:
        "El grupo, en desacuerdo sobre si continuar o no, decide someterlo a votación. Pero la cruda realidad de sus vidas podría ser tan despiadada como el propio juego.",
      episodeImage: Episode2,
    },
    {
      episodeName: "3. El hombre del paraguas",
      episodeInfo:
        "Llegan nuevos participantes a la ronda siguiente (que promete ser tan dulce como mortal) con algunos ases en la manga. Entretanto, Jun-ho se cuela dentro.",
      episodeImage: Episode3,
    },
    {
      episodeName: "4. El equipo es lo primero",
      episodeInfo:
        "A pesar de las alianzas entre jugadores, nadie está a salvo cuando apagan la luz. El equipo de Gi-hun necesita una estrategia para el tercer juego.",
      episodeImage: Episode4,
    },
    {
      episodeName: "5. Un mundo justo",
      episodeInfo:
        "Gi-hun y su equipo hacen turnos para vigilar de noche. Los enmascarados tienen problemas con uno de sus aliados en la conspiración.",
      episodeImage: Episode5,
    },
    {
      episodeName: "6. Gganbu",
      episodeInfo:
        "Los participantes se emparejan para el cuarto juego. Gi-hun tiene un dilema moral, Sang-woo elige salvarse a sí mismo y Sae-byeok cuenta la historia de su vida.",
      episodeImage: Episode6,
    },
    {
      episodeName: "7. Personas importantes",
      episodeInfo:
        "El líder enmascarado recibe a invitados importantes que vienen a disfrutar del espectáculo en primera fila. Algunos participantes caen ante la presión del quinto juego.",
      episodeImage: Episode7,
    },

    {
      episodeName: "8. El líder",
      episodeInfo:
        "La desconfianza y la repulsión aumentan entre los finalistas antes del último juego. Jun-ho consigue huir y se propone destapar lo que ocurre dentro de las instalaciones.",
      episodeImage: Episode8,
    },
    {
      episodeName: "9. Un día con suerte",
      episodeInfo:
        "El juego final presenta otra prueba cruel... pero, esta vez, su conclusión dependerá de un solo participante. El creador del juego diabólico sale a la luz.",
      episodeImage: Episode9,
    },
  ];
  const getEpisodeMarkdown = (data, number) => {
    return (
      <div className={`episode episode-${number}`}>
        <div className="image">
          <img src={data.episodeImage} alt="" />
        </div>
        <h3>{data.episodeName}</h3>
        <p>{data.episodeInfo}</p>
      </div>
    );
  };
  return (
    <Section id="episodes" className="defaultMargin">
      <div className="title">
        <img src={EpisodesImage} alt="Episodes " />
        <div className="circle"></div>
      </div>
      <div className="episodes">
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[0], 1)}
          {getEpisodeMarkdown(episodesData[1], 2)}
          {getEpisodeMarkdown(episodesData[2], 3)}
        </div>
        <div className="episodes__grid">
          <div className="square"></div>
          {getEpisodeMarkdown(episodesData[3], 4)}
          {getEpisodeMarkdown(episodesData[4], 5)}
        </div>
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[5], 6)}
          {getEpisodeMarkdown(episodesData[6], 7)}
          <div className="square"></div>
        </div>
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[7], 8)}
          <div></div>
          {getEpisodeMarkdown(episodesData[8], 9)}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  margin: 0vw 5vw;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh;
    position: relative;
    .circle {
      height: 8rem;
      width: 8rem;
      border: 10px solid #f72585;
      border-radius: 10rem;
      position: absolute;
      right: 10%;
    }
  }
  .episodes {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
      color: white;
      .square {
        height: 8rem;
        width: 8em;
        border: 10px solid ${blue};
        margin-left: 3rem;
        margin-top: 10rem;
      }
      .episode {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 2em;
        h3 {
          letter-spacing: 0.1rem;
        }
        p {
          color: #c0c0c0;
          font-weight: 300;
          letter-spacing: 0.05rem;
          text-align: justify;
        }
        .image {
          max-height: 15rem;
          overflow: hidden;
          img {
            height: 15rem;
            transition: 0.5s ease-in-out;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
        &-2,
        &-4,
        &-6 {
          .image {
            max-height: 25rem;
            max-width: 25rem;
            overflow: hidden;
            img {
              height: 25rem;
              width: 25rem;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    .title {
      width: 100%;
      margin: 0 0 7vh 0;
      img {
        width: 100%;
      }
    }
    .episodes {
      gap: 2vh;
      &__grid {
        display: block;
        .episode {
          margin-bottom: 3vh;
          gap: 3vh;
          .image {
            img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;