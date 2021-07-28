import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Styled
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { PageAnimation, fade } from "../animation";
import { useScroll } from "../components/useScroll";
//Component
import ScrollTop from "../components/ScrollTop";

const MovieDetail = () => {
  const history = useHistory();
  const currentUrl = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === currentUrl
    );
    setMovie(currentMovie[0]);
  }, [movies, currentUrl]);
  console.log(movies);

  //Scroll Animation
  const [element, controls] = useScroll();

  return (
    <>
      {movie && (
        <Details
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards ref={element} animate={controls} variants={fade}>
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    white-space: nowrap;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 2.7rem;
    }
  }
`;

const Awards = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  margin: 5rem;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  
`;

const AwardStyle = styled.div`
  padding: 2rem;
  flex-basis: 20rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    min-height: 50vh;
    object-fit: cover;
  }
`;

//Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
