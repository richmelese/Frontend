import React from "react";
import "../../styles/home/hometeam.css";
import Team1 from "../../Assets/avater (1).png";
import Team2 from "../../Assets/avater (2).png";
import Team3 from "../../Assets/avater (3).png";
import Team4 from "../../Assets/avater (4).png";
import Fade from "react-reveal/Fade";

const HomeTeam = () => {
  return (
    <div>
      <section>
        <Fade bottom duration={1500}>
          <div className="Team__Text">
            Our <span className="Team__span">Team </span>
          </div>
          <div className="Header">
            <h1>Meet our team member</h1>
            {/* <p>
              Praesent sagittis eros in convallis rutrum. Donec auctor nibh
              justo. Vestibu <br></br>tincidunt, libero sit amet vestibulum
              euismod, ex nisl imperdiet leo.
            </p> */}
          </div>
          {/* =============Avater================= */}
          <div className="Team__container">
            <div>
              <img src={Team1} alt="" />
              <h3>Darrell Steward</h3>
              <p>CEO & Founder of Gilio</p>
            </div>
            <div>
              {" "}
              <img src={Team2} alt="" />
              <h3>Cody Fisher</h3>
              <p>Project Manager</p>
            </div>
            <div>
              <img src={Team3} alt="" />
              <h3>Marvin McKinney</h3>
              <p>Product Designer</p>
            </div>
            <div>
              <img src={Team4} alt="" />
              <h3>Leslie Alexander</h3>
              <p>UI Designer</p>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default HomeTeam;
