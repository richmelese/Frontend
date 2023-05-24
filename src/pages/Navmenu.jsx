import React from "react";
// import Log from "../../src/assests/log.png";
import "../stayle/navmenu.css"
const Menu = () => {
  return (
    <div>
      <section className="NavMenu__section">
        <header className="header">
          <div className="logo">
            <a href="#">
            <  img src={require("../image/logo 1.png")}/>
            </a>
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>

            <ul className="menu">
              <li>
                <a href="./">Home</a>
              </li>
              <li>                                          
                <a href="/About">About</a>
              </li>

              <li>
                <a href="/Work">Work</a>
              </li>
              <li>
                <a href="/Contactus">Contactus</a>
              </li>
              {/* <li>
                <a href="/news">products</a>
              </li> */}
              <li>
                {/* <a href="/contact">
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact us</p>
                  </button>
                </a> */}
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Menu