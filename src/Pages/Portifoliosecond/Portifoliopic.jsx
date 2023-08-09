import React from "react";
import HomeBanner from "../../Assets/bgbanner.png";
import "../../styles/portifoliosecond/portifoliopic.css";
const Portifoliopic = () => {
  return (
    <div>
      <div className="more">
        <h1>
          More<span className="span_port">Portifolio</span>
        </h1>
      </div>

      <div className="grid__pic">
        <div className="first">
          <img src={require("../../Assets/Project Photo.png")} />
          <div className="shadow_box">
            <p className="p1">E-tutor - Education & Online LMS</p>
            <p className="pp">Web, Development, Product</p>
            <p className="linkk">klkhklnl</p>
          </div>
        </div>
        <div className="second">
          <img src={require("../../Assets/Project Photo (1).png")} />
          <div className="shadow_box2">
            <p className="p2">E-tutor - Education & Online LMS</p>
            <p className="ppp">Design, Development, Product</p>
          </div>
        </div>
        {/* <div className="shadow_box">
        <p className="p1">E-tutor - Education & Online LMS</p>
        <p className="pp">Web, Development, Product</p>
        <p className="btn">View case study</p></div> */}
        {/* <div className="shadow_box2"><p className="p2">E-tutor - Education & Online LMS</p>
      <p className="ppp">Design, Development, Product</p></div> */}
      </div>
    </div>
  );
};

export default Portifoliopic;
