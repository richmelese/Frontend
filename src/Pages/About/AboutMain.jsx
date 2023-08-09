import React from "react";
import "../../styles/about/about.css";
import AboutBg from "../../Assets/About-bg.png";
import Right from "../../Assets/Right.png";
import SecondAbout from "../../Assets/About-second.png";
import Fade from "react-reveal/Fade";

const AboutMain = () => {
  return (
    <div>
      <section>
        <div
          className="About__Banner"
          style={{
            backgroundImage: `url(${AboutBg})`,
          }}
        >
          <Fade bottom duration={1500}>
            <div className="About__Container">
              <div className="First ">
                {/* <h2>Creative Services For Boost Your Business Growth</h2> */}
                {/* <h2>LET US TELL YOU WHO WE ARE & WHAT WE DO</h2> */}
                <h2>Let Us tell you who we are & what we Do</h2>
              </div>
            </div>
          </Fade>
        </div>
        {/* ================Main__Content================== */}

        <div className="Abouts__Text">
          About <span className="Abouts__span">Us</span>
        </div>
        <div className="Main__About">
          <Fade bottom duration={1500}>
            <div>
              <div>
                <p>
                  {" "}
                  <img className="Right__img" src={Right} alt="" /> VISION
                </p>
                <h3>
                  To add value to the Ethiopian people by providing easy,
                  valuable Information Technology Solutions which will solve
                  local problems and create growing value for the Ethiopian
                  economy using a combination of talent & technology to develop
                  cost-effective solutions.
                </h3>
              </div>
              <div>
                <p>
                  {" "}
                  <img className="Right__img" src={Right} alt="" /> MISSION
                </p>
                <h3>
                  To add value to the Ethiopian people by providing easy,
                  valuable Information Technology Solutions which will solve
                  local problems and create growing value for the Ethiopian
                  economy using a combination of talent & technology to develop
                  cost-effective solutions.
                </h3>
              </div>
            </div>
            <div>
              <img src={SecondAbout} alt="" />
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default AboutMain;
