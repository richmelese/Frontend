import React from "react";
import HomeBanner from "../../Assets/BG (1).png";
import "../../styles/Secondservice/Secondservice.css";
const Servicebanner = () => {
  return(
   <div>
      <div
          className="Service__banner"
          style={{
            backgroundImage: `url(${HomeBanner})`,
            backgroundImage: `url(${HomeBanner})`,
          }}
        >
             <div className="Service__container">
            <div className="First">
              <h1>Get World Class Services</h1>
              <p>
              Tailored to Your Needs
              </p>
              </div>
              </div>
        </div>
        
   </div>
  )
};

export default Servicebanner;