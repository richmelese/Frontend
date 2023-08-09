import React from "react";
import "../../styles/home/homeservices.css";
import Icon1 from "../../Assets/icons (7).png";
import Icon2 from "../../Assets/icons (6).png";
import Icon3 from "../../Assets/icons (5).png";
import Icon4 from "../../Assets/icons (4).png";
import Icon5 from "../../Assets/icons (3).png";
import Icon6 from "../../Assets/Info.png";
import Arows from "../../Assets/ArrowRight.png";
import Fade from "react-reveal/Fade";
import data from "../../Data/data.json";
import { useState } from "react";
const HomeServices = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };
  return (
    <div>
      <section>
        <Fade bottom duration={1500}>
          <div className="Header__Container">
            <div>
              <div className="Servicess__Text">
                Services <span className="Servicess__span">We Offer</span>
              </div>
            </div>
            <p>
              Tewos Solutions strongly supports its clients by offering a wide
              range of software support and maintenance services to ensure that
              the delivered software runs smoothly and in full accordance with
              its clients’ requirements.
            </p>
            <div>
              <p>
                Tewos Solutions offers comprehensive third party integration
                services to help clients enhance efficiency at their
                organizations.
              </p>
            </div>
          </div>
        </Fade>

        <div className="Services__Container">
          <Fade bottom duration={1500}>
            <div>
              <div class="card">
                <img className="Icons__img" src={Icon1} alt="" />{" "}
                <div class="containers">
                  <h4>E-services</h4>
                  <p>
                    {" "}
                    Design and development of portals exposing e-services for
                    customers, citizens and businesses
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>

                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon2} alt="" />{" "}
                <div class="containers">
                  <h4>System Integration</h4>
                  <p>
                    Design and development of Integrated IT Solutions and
                    Tailor-made Software
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>
                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon3} alt="" />{" "}
                <div class="containers">
                  <h4>Custom Software Development</h4>
                  <p>
                    The process of designing, creating, deploying and
                    maintaining software for a specific.
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>
                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* =================Second Box========================= */}
        <Fade bottom duration={1500}>
          <div id="Services" className="Services__Container">
            <div>
              <div class="card">
                <img className="Icons__img" src={Icon4} alt="" />{" "}
                <div class="containers">
                  <h4>IT Consulting Services</h4>
                  <p>
                    {" "}
                    We plan strategy, User experience design, Technology
                    consulting
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>
                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon5} alt="" />{" "}
                <div class="containers">
                  <h4>Support & Maintenance Services</h4>
                  <p>
                    Our team of software professionals and IT maintenance
                    experts .
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>
                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card">
                <img className="Icons__img" src={Icon6} alt="" />{" "}
                <div class="containers">
                  <h4>Training</h4>
                  <p>
                    {" "}
                    We have a Technology to deliver content and facilitate
                    learning.
                  </p>
                  <div>
                    <h6>
                      <a href="/Secondservice" class="card-link">
                        Lern More
                      </a>
                      <img className="Serv-arwo" src={Arows} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default HomeServices;
