import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
// import { About, Description, Image } from "../styles";
// import styled from "styled-components";
// import { scrollReveal } from "../animation";
// import { useScroll } from "./useScroll";

function ServicesSection() {
  return (
    <div className="servcies">
      <div className="description">

      <h2>High <span> quality</span> services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="aperture"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money icon"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection;