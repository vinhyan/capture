import React from "react";
//Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
//Styles
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";
//useScroll
import { useScroll } from "./useScroll";
import { scrollAnim } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hide>
      <Services ref={element} animate={controls} variants={scrollAnim}>
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficiency</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="home2" />
        </Image>
      </Services>
    </Hide>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.7rem;
    }
  }
`;
export default ServicesSection;
