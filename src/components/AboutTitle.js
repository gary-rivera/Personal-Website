import home1 from "../img/home1.png";
//Styling
import styled from "styled-components";

function AboutTitle() {
  return (
    <AboutStyle>
      <DescriptionStyle>
        <div className="title"> 
          <HideStyle>
            <h2> We work to make</h2>
          </HideStyle>
          <HideStyle>
            <h2> your <span> dreams </span>come</h2>
          </HideStyle>
          <HideStyle>
            <h2> true</h2>
          </HideStyle>
        </div>
        <p> LINK to resume</p>
        <button> LINK </button>
      </DescriptionStyle>
      <ImageStyle> 
        <img src={home1} alt="landing page profile pic"/>
      </ImageStyle>
    </AboutStyle>
  )
}

// Styled Component
const AboutStyle = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const DescriptionStyle = styled.div`
  flex: 1;
  padding: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const ImageStyle = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const HideStyle = styled.div`
  overflow: hidden;
`;

export default AboutTitle;