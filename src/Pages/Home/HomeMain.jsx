import React from "react";
import HomeBanner from "../../Assets/Home__Banner.png";
import "../../styles/home/home.css";
import Fade from "react-reveal/Fade";

const HomeMain = () => {
  return (
    <div>
      <section>
        <div
          className="Home__Banner"
          style={{
            backgroundImage: `url(${HomeBanner})`,
          }}
        >
          <div className="Home__container">
            <Fade bottom duration={1500}>
              <div className="First">
                <h1>Welcome to Tewos Technology PLC</h1>
                <p>
                  Tewos Technology Solutions is a leading, highly innovative
                  software technology provider, established to provide leading
                  edge intelligent technical solutions and consulting services
                  to businesses, organizations and government in order to allow
                  the efficient and effective secure access and communication
                  with various information resources and services, anytime and
                  anywhere
                </p>
                <div className="Next">
                  <div className="Get__btn">
                    <button>
                      <a href="/about">
                        <h6>Learn more</h6>
                      </a>
                    </button>
                  </div>
                  <div className="Book__btn">
                    <button>
                      <a href="/contact">
                        <h6>BOOK A DEMO</h6>
                      </a>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </Fade>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
