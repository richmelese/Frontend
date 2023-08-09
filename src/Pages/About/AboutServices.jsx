import React from "react";
import "../../styles/about/aboutservices.css";
import Icon1 from "../../Assets/icons (7).png";
import Icon2 from "../../Assets/icons (6).png";
import Icon3 from "../../Assets/icons (5).png";
import Icon4 from "../../Assets/icons (4).png";
import Icon5 from "../../Assets/icons (3).png";
import Icon6 from "../../Assets/Info.png";
import Arows from "../../Assets/ArrowRight.png";
import Fade from "react-reveal/Fade";

const AboutServices = () => {
  return (
    <div>
      <section className="services__Whole__Container">
        <Fade bottom duration={1500}>
          <div className="About__Services">
            <div>
              <div className="About__Servicess__Text">
                The Core Values that drive
                <span className="About__Servicess__span">
                  <br />
                  Everything
                </span>
                we do
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1500}>
          <div className="Services__Container">
            <div>
              <div class="card">
                <img className="Icons__img" src={Icon1} alt="" />{" "}
                <div class="containers">
                  <h4>Creativity</h4>
                  <p>
                    {" "}
                    Whether you are looking to extend your in-house software
                    teams, or need assistance in developing, quality assuring,
                    managing or supporting your applications, we can help
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon2} alt="" />{" "}
                <div class="containers">
                  <h4>Teamwork</h4>
                  <p>
                    In a real team the members work toward a common goal.A team
                    working together usually gets more results in less time than
                    other types of organizations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon3} alt="" />{" "}
                <div class="containers">
                  <h4>Innovation</h4>
                  <p>
                    Innovation software goes beyond simply working to generate
                    new ideas and can actually be used to identify new markets
                    and develop disruptive business models that have yet to even
                    be considered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {/* =================Second Box========================= */}
        <Fade bottom duration={1500}>
          <div id="Services" className="Services__Container">
            <div>
              <div class="card">
                <img className="Icons__img" src={Icon4} alt="" />{" "}
                <div class="containers">
                  <h4>Quality</h4>
                  <p>
                    {" "}
                    Quality assurance is an integral part of our development
                    process and is also provided as a separate, stand-alone
                    service
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon5} alt="" />{" "}
                <div class="containers">
                  <h4>Simplicity</h4>
                  <p>
                    an experimental research program focused on developing
                    technologies for designs that are simpler to understand,
                    easier to use, and, ultimately, more enjoyable
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon6} alt="" />{" "}
                <div class="containers">
                  <h4>Integrity</h4>
                  <p>
                    Refrain from sharing secrets and confidential information
                    with others.Remain honest with your partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default AboutServices;
