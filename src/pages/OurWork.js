import React, { useState } from "react";
import { Link } from "react-router-dom";
//Styled
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { PageAnimation, fade, photoAnim, lineAnim, slider } from "../animation";
import { useScroll } from "../components/useScroll";
//Movie Data
import { MovieState } from "../movieState";
//Component
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {colorArr.map((color) => {
        return <Frame variants={slider} style={{ background: color }}></Frame>;
      })}
      {movies.map((movie, index) => {
        let ref, animate;
        if (index === 1) [ref, animate] = [element, controls];
        if (index === 2) [ref, animate] = [element2, controls2];

        return (
          <Movie key={movie.title} ref={ref} animate={animate} variants={fade}>
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Hide>
              <Link to={movie.url}>
                <motion.img
                  variants={photoAnim}
                  src={movie.mainImg}
                  alt={movie.title}
                />
              </Link>
            </Hide>
          </Movie>
        );
      })}
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 767px) {
    padding: 3rem 2rem; 
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin: 1rem 0 3rem 0;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Rainbow Frame Animation
const colorArr = [
  "#ffadad",
  "#ffd6a5",
  "#caffbf",
  "#9bf6ff",
  "#bdb2ff",
  "#ffc6ff",
];

const Frame = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

export default OurWork;
