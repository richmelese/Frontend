import React from "react";
// import "../../styles/Service/servicecontact.css";
import "../../styles/home/servicecontact.css";
const Servicecontact = () => {
  return (
    <div>
      <section>
        <div className="grid__contact">
          <div className="heading">
            <h2>
              Contact<span className="span_heading"> Us</span>
            </h2>
          </div>
          <div className="heading_Two">
            <h1>Have a project in mind! Drop me a line.</h1>
          </div>
          <div className="paragraph">
            <p>
              Got a project? Drop me a line if you want to work together on
              something exciting. Or do you need our help? Feel free to contact
              us.
            </p>
          </div>
        </div>
        <div className="grid__form">
          <div className="contact_heading">
            <h2>Get in touch</h2>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img
                  className="Ser__icons"
                  src={require("../../Assets/iconemail.png")}
                />
              </a>
              <p className="logo1">Email us</p>
              <p className="logo2">info@tewos.com</p>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img
                  className="Ser__icons"
                  src={require("../../Assets/iconphone.png")}
                />
              </a>
              <p className="logoPhone">Phone number</p>
              <p className="logo2">0911515291</p>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img
                  className="Ser__icons"
                  src={require("../../Assets/iconmarker.png")}
                />
              </a>
              <p className="logo1"></p>
              <p className="logolocation">Addis Ababa, Ethiopia</p>
            </li>
          </div>

          <div className="sub-form">
            <div>
              <label className="formfullname">FullName </label>
              <br></br>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your Name.."
                className="nameform"
                required
              ></input>{" "}
            </div>
            <div>
              <label className="formcoloremail">email</label>
              <br></br>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="example@gmail.com.."
                className="emailform"
                required
              ></input>
            </div>
          </div>
          <div></div>
          <div className="subdiv1">
            <label className="formcolor">Phone</label> <br></br>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your Phone no."
              className="formbox"
              required
            ></input>
            <br></br>
            <label className="formcolor">Subject</label> <br></br>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your Subject."
              className="formbox"
              required
            ></input>
            <br></br>
            <form>
              <label className="formcolortext2">Leave us a message</label>
              <br></br>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                className="txtarea"
                required
              ></textarea>
              <br></br>
              <button className="submit">
                <a href="#">
                  <p>Send message</p>
                </a>
                <img
                  className="arrow__services"
                  src={require("../../Assets/ArrowRight1.png")}
                />
              </button>
            </form>
          </div>

          {/* <div>
       <label className="formcoloremail">email</label><br></br> <input type="text" id="fname" name="firstname" placeholder="example@gmail.com.." className="emailform" required></input>
       </div> */}

          <div className="social">
            <li>
              {" "}
              <a href="#">
                {" "}
                <img src={require("../../Assets/Social Media (1).png")} />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img src={require("../../Assets/Socials (4).png")} />
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="facbook">
                {" "}
                <img src={require("../../Assets/Social Media.png")} />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img src={require("../../Assets/linkden.png")} />
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <img src={require("../../Assets/instagram.png")} />
              </a>
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicecontact;
