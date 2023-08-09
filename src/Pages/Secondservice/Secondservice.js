import React from "react";
import Servicebanner from "../Service/Servicebanner";
import Servicework from "./Servicework";
import Brand from "../Service/Brand";
import Servicecontact from "../Service/Servicecontact";
import TrustedPartner from "../../Pages/Home/HomePartner";
import "../../styles/Secondservice/Secondservice.css";
const Secondservice = () => {
  return (
    <div>
      <Servicebanner />
      <Servicework />
      <div className="Second__partner">
        <TrustedPartner />
      </div>
      <Servicecontact />
    </div>
  );
};

export default Secondservice;
