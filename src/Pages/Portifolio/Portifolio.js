import React from "react";
import Banner from "./Banner";
import Filter from "./Filter";
import Servicecontact from "../Service/Servicecontact";
import Filterimage from "./Filterimage";


const Portifolio = () => {
  return (
    <div>
   <Banner/>
   {/* <Filter/> */}
   <Filterimage/>
   <Servicecontact/>
    </div>
  );
};

export default Portifolio;