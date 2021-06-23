import home1 from "../img/home1.png";
//Styling
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";

function AboutTitle() {
  return (
    <AboutStyle>
      <DescriptionStyle>
        <motion.div 
          className="title"
        > 
          <HideStyle>
            <motion.h2> 
              We work to make
            </motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2> your <span> dreams </span>come</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2> true</motion.h2>
          </HideStyle>
        </motion.div>
        <p> LINK to resume</p>
        <button> LINK </button>
      </DescriptionStyle>
      <ImageStyle> 
        <img src={home1} alt="landing page profile pic"/>
      </ImageStyle>
    </AboutStyle>
  )
}

export default AboutTitle;