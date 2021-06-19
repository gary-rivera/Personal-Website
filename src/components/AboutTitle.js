import home1 from "../img/home1.png";

function AboutTitle() {
  return (
    <div>
      <div className="description">
        <div className="title"> 
          <div className="hide">
            <h2> We work to make</h2>
          </div>
          <div className="hide">
            <h2> your <span> dreams </span>come</h2>
          </div>
          <div className="hide">
            <h2> true</h2>
          </div>
        </div>
        <p> LINK to resume</p>
        <button> LINK </button>
      </div>
      <div className="image"> 
        <img src={home1} alt="landing page profile pic"/>
      </div>
    </div>
  )
}

export default AboutTitle;