import React from "react";
import Fade from "react-reveal/Fade";

const AboutNumber = () => {
  return (
    <div>
      {/* Number */}
      <Fade bottom duration={1500}>
        <div className="grid-numbers">
          <div className="no1">
            {" "}
            <div className="Sup">
              {" "}
              13<sup>+</sup>
            </div>
            <p className=" lorem">Software Developments</p>
          </div>
          <div className="no2">
            <div className="Sup"> 110</div>
            <p className="lorem">Application Management</p>
          </div>
          <div className="no3">
            <div className="Sup">
              {" "}
              99<sup>%</sup>
            </div>
            <p className="lorem">quality Assurance</p>
          </div>
          <div className="no4">
            {" "}
            <div className="Sup">
              {" "}
              110<sup>+</sup>
            </div>
            <p className="lorem">Application Developmen</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutNumber;
