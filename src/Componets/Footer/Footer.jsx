import React from "react";
import FooterBg from "../../Assets/Footer-bg.png";
import "./footer.css";
import Log from "../../Assets/logo.png";
import BsFacebook from "react-icons/bs";
import BsInstagram from "react-icons/bs";
import Facebook from "../../Assets/Social (4).png";
import Instgream from "../../Assets/social (1).png";
import Linkdin from "../../Assets/social (2).png";
import Twitter from "../../Assets/social (3).png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <section>
        <div
          className="Footer__Container"
          style={{
            backgroundImage: `url(${FooterBg})`,
          }}
        >
          <div className="Text">
            {/* <h1> Let’s start together.</h1> */}
            <div className="Sub__Footer">
              <div>
                <p>+251 953969696 </p>
              </div>
              <div>
                <p>tewossolutions@gmail.com</p>
              </div>
              <hr className="Footer__hr" />
            </div>
          </div>
          {/* ======================================== */}
          <div className="Footer__Content">
            <div>
              <img className="Footer__log" src={Log} alt="" />
            </div>
            <div>
              <h2>Pages</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/Service">Service</a>
                </li>
                <li>
                  <a href="/Portfolio">Portifolio</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 id="contact">Contact Us</h2>
              <p>
                {/* Working Hour <br /> Monday - Friday
                <br /> 8:30 am – 5:30 pm
                <br /> Saturday - from 8:30 am – 5:30 pm */}
                Working Hour <br /> Monday - Friday - from 8:30 am – 5:30 pm
                <br /> Saturday - from 8:30 am – 5:30 pm
              </p>
            </div>
            <div>
              <h2>Newsletter</h2>
              <div className="Input__container">
                <input
                  className="Footer__input"
                  type="email"
                  placeholder="enter your mail..."
                />
                <button>Submit</button>
              </div>
              {/* ===========Social media======== */}
              {/* <ul className="Social__Media">
                <li>
                  <a href="#">
                    <img className="facbook" src={Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="instagram"src={Instgream} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="linkdin" src={Linkdin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="twitter" src={Twitter} alt="" />
                  </a>
                </li>
              </ul> */}
           <ul className="Social__Media">
           <li><a href='#'><FaFacebook className="facebook" style={{ color: '#0A66C2' }}/></a></li> 
        <li> <a href='#'><FaInstagram className=' Instagram' style={{ color: '#E4405F' }}/></a></li>
        <li> <a href='#'><FaLinkedin className=' Linkedin' style={{ color: '#0A66C2' }}/></a></li>
        <li> <a href='#'><FaTwitter className=' twitter'style={{ color: 'rgb(50, 158, 201)' }}/></a></li>
            </ul> 
            </div>
          </div>
          {/* Bitapps */}
          {/* <hr className="Footer__Two__hr" /> */}

          <div className="bitapps__container">
            <h1>
              ©2023{" "}
              <span>
                <a href="https://Tewostech.com/">Tewostech </a>{" "}
              </span>
              . All rights reserved | Desing  and developed by <a href="https://Bitappstech.com/">Bitappstech </a>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
