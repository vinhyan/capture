import React, { useState } from "react";
//Animation
import { motion } from "framer-motion";
//Styled
import styled from "styled-components";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ title, children }) => {
  const [isToggle, setToggle] = useState(false);
  return (
    <StyledToggle
      layout
      onClick={() => {
        setToggle(!isToggle);
      }}
    >
      <Question layout>
        <h4>{title}</h4>
        <FontAwesomeIcon
          icon={isToggle ? faChevronUp : faChevronDown}
          size="2x"
        />
      </Question>
      {isToggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  padding: 3rem 0rem;
  cursor: pointer;
`;

const Question = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Toggle;
