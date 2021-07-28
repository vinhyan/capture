import React from "react";
//Animation
import { motion } from "framer-motion";
import { PageAnimation, titleAnim, contactAnim } from "../animation";
//Style
import styled from "styled-components";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <StyledContact
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch!</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <ContactWrap variants={contactAnim}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
          <a href="https://twitter.com/">Leave a message</a>
        </ContactWrap>
      </Hide>
      <Hide>
        <ContactWrap variants={contactAnim}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
          <a href="https://twitter.com/">Send an email</a>
        </ContactWrap>
      </Hide>
      <Hide>
        <ContactWrap variants={contactAnim}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
          <a href="https://twitter.com/">Our social media</a>
        </ContactWrap>
      </Hide>
    </StyledContact>
  );
};
const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 767px) {
    padding: 5rem 2rem;
    h2 {
      font-size: 2.5rem;
    }
    
    
  }
`;
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  font-weight: 700;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const ContactWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  svg {
    color: #23d997;
  }
  a {
    font-size: 3rem;
    margin-left: 2rem;
    color: #353535;
  }
  @media (max-width: 767px) {
    a {
      font-size: 2rem;
    }
  }

 
`;

export default ContactUs;
