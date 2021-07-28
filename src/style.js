import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
  color: white;

  @media (max-width: 767px) {
    display: block;
    padding: 3rem 2rem;
  }
  
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 3rem;
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 767px) {
    text-align: center;
    padding-right: 0;
  }

`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

