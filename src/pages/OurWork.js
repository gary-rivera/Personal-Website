import { Link } from 'react-router-dom';
import styled from 'styled-components'

//images
import athlete from '../img/athlete-small.png';
import racer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//animations
import { motion } from 'framer-motion';
import { fade, photoAnim, pageAnimation, lineAnim } from "../animation"

function OurWork() {
  return (
    <Work 
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    style={{background: "#fff"}}

    > 
      <Frame1></Frame1>
      <Frame2></Frame2>
      <Frame3></Frame3>
      <Frame4></Frame4>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img 
              variants={photoAnim} 
              src={athlete} 
              alt="athlete"/>
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img 
            variants={photoAnim}
            src={racer} alt="racer"
          />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img 
            variants={photoAnim}
            src={goodtimes} 
            alt="good times"
          />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)` 
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div` 
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
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

const Frame1= styled(motion.div)`
  position:fixed;
  left: 0;
  top 10%;
  width: 100%;
  height: 100vh;
  background: fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;