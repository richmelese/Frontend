import React from "react";
import HomeBanner from "../../Assets/servicebanner.png";
import "../../styles/Service/servicespan.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home/homeservices.css";
import Icon1 from "../../Assets/icons (7).png";
import Icon2 from "../../Assets/icons (6).png";
import Icon3 from "../../Assets/icons (5).png";
import Icon4 from "../../Assets/icons (4).png";
import Icon5 from "../../Assets/icons (3).png";
import Icon6 from "../../Assets/Info.png";
import Arows from "../../Assets/ArrowRight.png";
import Fade from "react-reveal/Fade";
const Servicecard = () => {
  return (
    <div>
      <div className="grid__card">
        <Fade bottom duration={1500}>
          <div className="Text">
            <h2>
              Our <span className="Servicess__span">service</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a, numquam eum eos animi nostrum dolore excepturi sunt
              officia ea nisi molestias
            </p>
          </div>

          <div></div>
          <div className="span_paragraph">
            <p>
              lorem knklnkldnd, lkhdlgnddkojoklmespfj knklnkldnd,
              lkhdlgnddkojoklmespfj
            </p>
          </div>
        </Fade>
        <div class="card">
          <img
            className="icon1"
            src={require("../../Assets/tabler_device-mobile-code@2x.png")}
          />
          <h6 class="card-subtitle mb-2 text-muted">Mobiil Application</h6>
          <p class="card-text">
            {" "}
            Android and IOS app that will satisfy every end-users. encompasses
            various stages, including ideation, design, coding, testing, and
            deployment
          </p>
          <img
            className="lernmore"
            src={require("../../Assets/lernmore.png")}
          />
          <a href="#" class="card-link">
            Lern More
          </a>
        </div>
        <div class="card">
          <img className="Icons__img" src={Icon5} alt="" />{" "}
          <div class="containers">
            <h4>Support & Maintenance Services</h4>
            <p>
              Our team of software professionals and IT maintenance experts .
            </p>
            <div>
              <h6>
                <a href="#"> Learn More </a>
                <img className="Serv-arwo" src={Arows} alt="" />
              </h6>
            </div>
          </div>
        </div>
        <div class="card">
          <img className="icon1" src={require("../../Assets/web.png")} />
          <h6 class="card-subtitle mb-2 text-muted">
            Custom Software Development
          </h6>
          <p class="card-text">
            Providing scalable, high-performance End-to-end mobile, Enterprise
            and web application development services and makes custom software
            development.
          </p>
          <a href="#" class="card-link">
            Lern More
          </a>
        </div>

        <div class="card">
          <img className="icon1" src={require("../../Assets/we.png")} />
          <h6 class="card-subtitle mb-2 text-muted">
            Software Maintenance and Support
          </h6>
          <p class="card-text">
            We provide support for our client to protect and maintain their IT
            infrastructure and systems we have implemented.
          </p>
          <a href="#" class="card-link">
            Lern More
          </a>
        </div>
        <div class="card">
          <img className="icon1" src={require("../../Assets/web5.png")} />
          <h6 class="card-subtitle mb-2 text-muted">Training</h6>
          <p class="card-text">
            We develop all types of web applications – from small to advanced
            management tools.
          </p>
          <a href="#" class="card-link">
            Lern More
            <img class="color" src={require("../../Assets/redarrow.png")} />
          </a>
        </div>
        <div class="card">
          <img className="icon1" src={require("../../Assets/web6.png")} />
          <h6 class="card-subtitle mb-2 text-muted">Solutions</h6>
          <p class="card-text">
            Tewos Vehicle Inspection Information System: Desktop, Web and Mobile
            app system.
          </p>
          <a href="#" class="card-link">
            Lern More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
