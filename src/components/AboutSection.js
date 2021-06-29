import SectionTitle from "../utils/SectionTitle";
import Project from "./Project";

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, scrollReveal } from '../animation'
import { useScroll } from "../utils/useScroll";
import Wave from './Wave'


//Styles



function AboutSection() {
  const [element, controls] = useScroll();

  return (
    <AboutStyle 
      id="about"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <AboutMeStyle>
        <SectionTitle title="About" index="1"/>
        <AboutTextStyle>
          <motion.p>
            Currently looking forward to starting at Rithm School, an intensive software engineering program that focuses on developing career-ready graduates.
            <br/>
            In January 2021 I left my long-time role within the veterinary medicine field to fully commit to schooling. During my time there I started as a receptionist, progressed to medical billing, and eventually managed the hospital's medical equipment inventory. And that growth was due in large part to my affinity for problem-solving.
            <br/>
            I’ve always believed there are never enough ways to solve a problem and I find joy in providing unique perspectives to resolutions. It was this philosophy that helped me transition to becoming a programmer. My passion for understanding complex concepts and how to creatively apply those concepts only continues to grow the deeper I dive into the world of programming.
            <br/>
            As for now, I look forward to honing my skills as a software engineer with Rithm School and ultimately continuing to develop my craft with any company ready to give me a chance. If you’d like to know more or just chat about all-things-programming please don’t hesitate to connect with me at a.gary.rivera@gmail.com.
          </motion.p>
        </AboutTextStyle>
      </AboutMeStyle>
      {/* <Wave /> */}
    </AboutStyle>
  )
}

const AboutTextStyle = styled.div`
  display: inline-block;
  align-self: center;

  /* appearance  */
  background: rgba(82,183,136, 0.35);
  border-radius: 5px;
  height: 45%;
  width: 50vw;
  
  p {
    font-size: 1em;
    padding: 1.5rem;
  }
`;

const AboutMeStyle = styled(DescriptionStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default AboutSection;

{/* <PortfolioStyle
variants={scrollReveal}
initial="hidden"
animate={controls}
ref={element}
>
<DescriptionStyle>
  <HideStyle>
    <motion.h2 id="portfolio" variants={titleAnim}>
      <SectionTitle title="Portfolio" index="2"/>
    </motion.h2>
  </HideStyle>
  <CardsStyle>
    <Project />
  </CardsStyle>
</DescriptionStyle>
</PortfolioStyle> */}