import React from "react";
import HomeBanner from "../../Assets/acordinoimage.png";
import "../../styles/Service/serviceacordino.css";
import Appacordino from "../Service/Appacordino";

const Serviceacordino = () => {
  return(
   <div>
      
             <div className="grid_acordino">
             <div className="accordino-image">
             <img src={require("../../Assets/acordinoimage.png")} />
              </div>
              <div><Appacordino/></div>
              </div>
        </div>
        
  
  )
};

export default Serviceacordino;