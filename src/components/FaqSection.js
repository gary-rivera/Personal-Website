import styled from "styled-components";
import { AboutStyle } from '../styles';

function FaqSection() {
  return (
    <Faq>
      <h2> Any Questions <span>FAQ</span></h2>
      <div className="question">
        <h4> How do I start?</h4>
        <div className="answer">
          <div className="faq-line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>    
      <div className="question">
        <h4> Different Payment Methods?</h4>
        <div className="answer">
        <div className="faq-line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="question">
        <h4> What Products Are Offered?</h4>
        <div className="answer">
        <div className="faq-line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </Faq>
  )
};

const Faq = styled(AboutStyle)`
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
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;


export default FaqSection;