import React from "react";
import HomeBanner from "../../Assets/servicebanner.png";
import "../../styles/Secondservice/servicework.css";
import Fade from "react-reveal/Fade";
const Servicework = () => {
  return (
    <div>
      <section>
        <div className="work__material">
          <div className="icon__page">
            <Fade bottom duration={1500}>
              <li className="one">
                <img
                  className="one1"
                  src={require("../../Assets/tabler_device-mobile-code@2x.png")}
                />
                <p className="p1icon">Web application</p>
              </li>
              <li className="two">
                <img
                  id="Serr__Iconss"
                  className="Serr__Iconss"
                  src={require("../../Assets/Vector.png")}
                />
                <p className="p1icon">Traning</p>
              </li>
              <li className="three">
                <img
                  id="Serr__Iconss"
                  className="Serr__Iconss"
                  src={require("../../Assets/Vector (1).png")}
                />
                <p className="p1icon">Mobil app development</p>
              </li>
              <li className="four">
                <img
                  id="Serr__Iconss"
                  className="Serr__Iconss"
                  src={require("../../Assets/Vector (2).png")}
                />
                <p className="p1icon">Custom Software Development</p>
              </li>
              <li className="five">
                <img
                  id="Serr__Iconss"
                  className="Serr__Iconss"
                  src={require("../../Assets/Vector (3).png")}
                />
                <p className="p1icon">Software Maintenance and Support</p>
              </li>
              <li className="six">
                {" "}
                <img
                  id="Serr__Iconss"
                  className="Serr__Iconss"
                  src={require("../../Assets/Information.png")}
                />
                <p className="p1icon">Solution</p>
              </li>
            </Fade>
          </div>
          <div className="service-image">
            <Fade bottom duration={1500}>
              <img src={require("../../Assets/acordinoimage.png")} />
            </Fade>
          </div>
          <div></div>
          <Fade bottom duration={1500}>
            <div className="second__pharagrahp">
              <p>
                {" "}
                Web Solutions is a leading web development company specializing
                in creating impactful and high-performance websites for
                businesses of all sizes. With a team of skilled developers,
                designers, and digital strategists, we combine cutting-edge
                technology with creative expertise to deliver outstanding online
                experiences
              </p>

              <ul className="unorderd">
                <li>
                  Creating and maintaining websites that are visually appealing
                </li>
                <li>
                  Developing e-commerce platforms, content management systems
                  (CMS)
                </li>
                <li>
                  Implementing responsive design to ensure compatibility across
                  different devices
                </li>
                <li>
                  Integrating mobile apps with backend systems, databases, or
                  third-party APIs
                </li>
              </ul>
              <p>
                Discover the power of custom software development with
                Tewostech. Let us transform your vision into reality and take
                your business to new heights of success. Contact us today to
                discuss your software development needs and start your journey
                towards digital transformation
              </p>
            </div>

            <div></div>
            <div className="paragrahp">
              <p className="des__para">
                As a leading software maintenance and support company, we have a
                proven track record of delivering exceptional services to
                businesses across various industries. Our commitment to
                excellence, combined with our technical prowess, enables us to
                optimize your software investment and maximize its value.
              </p>

              <ul className="orderd_number">
                <li>IT Consulting and Strategy</li>
                <li>E-commerce Solutions</li>
                <li>Software Testing and Quality Assurance</li>
                <li>IT Support and Maintenance</li>
              </ul>
              <p className="des__para">
                Discover the power of tailored solutions that drive your
                business forward. Contact us today to discuss your unique
                challenges and let us craft a solution that propels your
                success..
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Servicework;
