import React from "react";
import HomeBanner from "../../Assets/bgbanner.png";
import "../../styles/portifoliosecond/portifoliobanner.css";
import Fade from "react-reveal/Fade";
const Portifoliobanner = () => {
  return (
    <div>
      <div
        className="Portifolio__banner"
        style={{
          backgroundImage: `url(${HomeBanner})`,
          backgroundImage: `url(${HomeBanner})`,
        }}
      >
        <div className="Portifolio__container">
          <Fade bottom duration={1500}>
            <div className="First">
              {/* <h1>Get World Class Services</h1> */}
              <p>Website Desing</p>
              <h6>web desing</h6>
            </div>
          </Fade>
        </div>
      </div>
      <div className="grid_banner">
        <div className="image">
          <img src={require("../../Assets/Photo.png")} />
        </div>
      </div>
      <div className="second_box">
        <div className="box1">
          <p>21+</p>
          <h6>Client</h6>
        </div>
        <div>
          {" "}
          {/* <img className="line" src={require("../../Assets/Line.png")} /> */}
        </div>
        <div className="box2">
          <p>34+</p>
          <h6>Web Design</h6>
        </div>
        <div>
          {" "}
          {/* <img className="line" src={require("../../Assets/Line.png")} /> */}
        </div>
        <div className="box3">
          <p>16.12.2023</p>
          <h6>Date</h6>
        </div>
        <div>
          {" "}
          {/* <img className="line" src={require("../../Assets/Line.png")} /> */}
        </div>
        <div className="box4">
          <a href="/">
            <p>live link</p>
          </a>
          <h6>Website</h6>
        </div>
      </div>
    </div>
  );
};

export default Portifoliobanner;
