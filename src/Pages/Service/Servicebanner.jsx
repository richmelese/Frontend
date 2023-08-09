import React from "react";
import HomeBanner from "../../Assets/servicebanner.png";
import "../../styles/Service/service.css";
import Fade from "react-reveal/Fade";
const Servicebanner = () => {
  return (
    <div>
      <div
        className="Service__banner"
        style={{
          backgroundImage: `url(${HomeBanner})`,
          backgroundImage: `url(${HomeBanner})`,
        }}
      >
        <div className="Service__container">
          <Fade bottom duration={1500}>
            <div className="First">
              <h1>Services We Offer</h1>
              <p>Tailored to Your Needs</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Servicebanner;
