import React from "react";
//Styled
import styled from "styled-components";
import { About, Hide } from "../style";
//Components
import Toggle from "./Toggle";
//Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollAnim } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hide>
      <Faq ref={element} animate={controls} variants={scrollAnim}>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cupiditate optio quo esse harum sunt nesciunt iure id molestias
                ducimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="How Do I Pay?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cupiditate optio quo esse harum sunt nesciunt iure id molestias
                ducimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="How Do I Book?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cupiditate optio quo esse harum sunt nesciunt iure id molestias
                ducimus.
              </p>
            </div>
          </Toggle>
          <Toggle title="How Do I Request Product Review?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                cupiditate optio quo esse harum sunt nesciunt iure id molestias
                ducimus.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Hide>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  @media (max-width: 767px) {
    h2 {
      text-align: center;
    }
  }
`;

export default FaqSection;
