import React from "react";
import "../../styles/home/homeport.css";
import PortOne from "../../Assets/homePortfolio (1).png";
import PortTwo from "../../Assets/homePortfolio (2).png";
import PortThree from "../../Assets/homePortfolio (3).png";
import PortFour from "../../Assets/homePortfolio (4).png";
import PortFive from "../../Assets/homePortfolio (5).png";
import PortSix from "../../Assets/homePortfolio (6).png";
import PortBg from "../../Assets/port-services.png";
import IconButton from "../../Assets/Plus.png";
import Fade from "react-reveal/Fade";

const HomePort = () => {
  return (
    <div>
      <section>
        <div
          style={{
            backgroundImage: `url(${PortBg})`,
          }}
        >
          <div className="Ports__Text">
            Our <span className="Ports__span">Portfolio</span>
          </div>
          <div className="Port__Main__Header">
            <div>
              {" "}
              <h4 className="Homeport__header">
                Our client, global analytical techno company, wanted to build
                market.
              </h4>
            </div>
            <div>
              <button>
                <p>
                  <a href="/portfolio">More Gallery</a>
                </p>
              </button>
            </div>
          </div>
          {/* <h1>betty</h1> */}
          <Fade bottom duration={1500}>
            <div className="Homework__container">
              <div>
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortOne} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                        Tewos Vehicle Inspection Information System
                      </h2>
                    </figcaption>
                  </figure>
                </div>
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortOne} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                        SUPPORT & MAINTENANCE SERVICES
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="Sub__img">
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortTwo} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                      IT CONSULTING SERVICES
                      </h2>
                    </figcaption>
                  </figure>
                </div>
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortThree} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                      SYSTEM INTEGRATION
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="Sub__img">
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortFour} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                      CUSTOM APPLICATION DEVELOPMENT SERVICES
                      </h2>
                    </figcaption>
                  </figure>
                </div>
                <div class="container">
                  <figure class="hover-img">
                    <img src={PortFive} />
                    <figcaption>
                      <a href="/portfolio">
                        {" "}
                        <img className="Icon__img" src={IconButton} alt="" />
                      </a>

                      <h2 className="Sub__text">
                      TECHNOLOGY PROVISION AND IT CONSULTING 
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </Fade>
        </div>

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
      </section>
    </div>
  );
};

export default HomePort;
