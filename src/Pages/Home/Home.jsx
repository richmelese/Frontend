import React from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomePartner from "./HomePartner";
import HomePort from "./HomePort";
import HomeTeam from "./HomeTeam";
import HomeServices from "./HomeServices";
import HomeNews from "./HomeNews";
import Servicecontact from "../Service/Servicecontact";

// import Fetch from "./Fetch";

const Home = () => {
  return (
    <div>
      <HomeMain />
      {/* <Fetch /> */}
      <HomeAbout />

      <HomePartner />
      {/* <HomeServices /> */}

      <HomePort />
      <HomeTeam />
      {/* <HomeNews /> */}
      <Servicecontact />
    </div>
  );
};

export default Home;
