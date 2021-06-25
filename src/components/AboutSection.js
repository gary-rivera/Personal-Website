import home1 from "../img/home1.png";
//Styling
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

function AboutSection() {
  return (
    <AboutStyle>
      <DescriptionStyle>
        <motion.div className="title"> 
          <HideStyle>
            <motion.h2 variants={titleAnim}> 
              We work to make
            </motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnim}> your <span> dreams </span>come</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnim}> true</motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fade}> LINK to resume</motion.p>
        <motion.button variants={fade}> LINK </motion.button>
      </DescriptionStyle>
      <ImageStyle> 
        <motion.img 
        variants={photoAnim} 
        initial="hidden"
        animate="show"
        src={home1} 
        alt="landing page profile pic"/>
      </ImageStyle>
      <Wave />
    </AboutStyle>
  )
}

export default AboutSection;