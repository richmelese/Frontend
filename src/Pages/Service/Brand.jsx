import React from "react";
import "../../styles/Service/brand.css";
const Brand = () => {
  return (
    <div>
      <section>
      <div className="headingbrand">Trusted<span className="span_heading">Parteners</span></div>
          <p>Hear are some of our trusted parteners </p>
        <div className="brand__container">
      
         <div className="star"> <img  src={require("../../Assets/1.png")} /></div>
          {/* <div className="studio"><img  src={require("../../Assets/Studio Green.png")} /></div> */}
          <div className="nortn"><img  src={require("../../Assets/Norto.png")} /></div>
          {/* <div className="dimend"><img  src={require("../../Assets/Star 11.png")} /></div> */}
          <div className="point"><img  src={require("../../Assets/3.png")} /></div>
          <div className="out"><img  src={require("../../Assets/4.png")} /></div>
          <div className="brand"><img  src={require("../../Assets/5.png")} /></div>
          {/* <div className="last"><img  src={require("../../Assets/6.png")} /></div> */}
        </div>
      </section>
    </div>
  );
};

export default Brand;
