import React from "react";
import "../../styles/home/homeabout.css";
import HomeAboutImg from "../../Assets/Home__about.png";
import Pattern from "../../Assets/Pattern.png";
import Team from "../../Assets/team.png";
import Fade from "react-reveal/Fade";

const HomeAbout = () => {
  return (
    <div>
      <section>
        <Fade bottom duration={1500}>
          <div className="HA__container">
            <div>
              <div className="Abouts__Text">
                About <span className="Abouts__span">Us </span>
              </div>

              <p className="Vision__text">Vision</p>
              <h6>
                Established to deliver leading edge secure technologies,
                technical solutions and consulting services to businesses,
                organizations and governmental bodies, Tewos Solutions was
                founded with the vision to enable “secure access to any service,
                data and information anytime, anywhere “, providing its
                customers and business partners with robust, extensible and
                customizable security-enhanced solutions for information
                sharing, data exchange, services invocation and communication
              </h6>
              <p className="Miss__header">MISSION</p>
              <h6>
                Tewos Solutions mission is to enhance the business operation of
                its clients by developing and/or implementing premium IT
                products and services. Tewos Solutions’ mission includes
                <br /> • To deliver effective, efficient, reliable, accessible
                and secure Information technology solutions, products, and
                services that are relevant to the Ethiopian environment and
                fully support the country's needs.
                <br />
                • To become a high impact provider of IT products and services
                in Africa. <br />• Providing our employees with meaningful work
                and advancement opportunities.
              </h6>
              <button className="ReadMore__btn">
                <h3>
                  <a href="/about"> Read More</a>{" "}
                </h3>{" "}
              </button>
            </div>
            <div>
              <img className="Pattern-img" src={Pattern} alt="" />
            </div>
            <div>
              <img className="HAbout__img" src={HomeAboutImg} alt="" />
              <div className="Box__container">
                <div>
                  <img src={Team} alt="" />
                </div>
                <div className="Satisfed__Cont">
                  <h1>1,542</h1>
                  <h5>Satisfied Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default HomeAbout;
