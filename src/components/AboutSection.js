import React from "react";
import { Link } from "react-router-dom";
//Components
import Wave from "../components/Wave";
//image
import home1 from "../img/home1.png";
//Style
import { About, Description, Hide, Image } from "../style";
//Animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem
          nisi culpa libero suscipit sunt, necessitatibus iste quas enim
          quisquam!
        </motion.p>
        <Link to="https://vinhyan.github.io/capture/contact" className="button">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="profile" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
