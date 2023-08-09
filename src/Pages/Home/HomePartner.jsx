import React from "react";
import "../../styles/home/homepartner.css";
import Slider from "./Slider";
import Fade from "react-reveal/Fade";

const HomePartner = () => {
  return (
    <div>
      <section>
        <Fade bottom duration={1500}>
          <div className="Partners__Container">
            <div></div>

            <div className="Partners__Text">
              Trusted <span className="Partners__span">Partners</span>
            </div>
          </div>

          <Slider />
        </Fade>
      </section>{" "}
    </div>
  );
};

export default HomePartner;
