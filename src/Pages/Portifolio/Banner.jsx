import React from "react";
import HomeBanner from "../../Assets/bgp.png";
import "../../styles/portifolio/banner.css";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div>
      <div
        className="Service__banner"
        style={{
          backgroundImage: `url(${HomeBanner})`,
          backgroundImage: `url(${HomeBanner})`,
        }}
      >
        <Fade bottom duration={1500}>
          <div className="Service__container">
            <div className="First">
              {/* <h1>Get World Class Services</h1> */}
              <h1>Our Portfolio</h1>
              <p>Tailored to Your Needs</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
