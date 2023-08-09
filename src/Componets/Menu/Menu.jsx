import React from "react";
import "./menu.css";
import { NavLink } from 'react-router-dom';
import Log from "../../Assets/logo.png";
const Menu = () => {
  return (
    <div>
      <section className="NavMenu__section">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src={Log} alt="" />
            </a>
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>

            <ul className="menu">
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>{" "}
              </li>
              <li>
              <NavLink to="/Service">Service</NavLink>
              </li>
              <li>
              <NavLink to="/Portfolio">Solution</NavLink>
                {/* <a href="/Portfolio">Solution</a> */}
              </li>

              <li>
              <NavLink to="/Announcements">Announcements</NavLink>
                {/* <a href="/Announcements">Announcement</a> */}
              </li>
              <li>
                <a href="/contact">
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact</p>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Menu;
