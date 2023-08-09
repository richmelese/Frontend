import React from "react";
import Servicebanner from "./Servicebanner";
import Servicecard from "./Servicecard";
import Serviceacordino from "./Serviceacordino";
import Brand from "./Brand";
import Servicecontact from "./Servicecontact";
import HomeServices from "../../Pages/Home/HomeServices";
import HomePartner from "../../Pages/Home/HomePartner";
const Service = () => {
  return (
    <div>
      <Servicebanner />
      {/* <Servicecard /> */}
      <HomeServices />
      <Serviceacordino />
      {/* <Brand /> */}
      <HomePartner />
      <Servicecontact />
    </div>
  );
};

export default Service;
