import React from "react";
import img_1 from "../../Assets/homePortfolio (2).png";
import img_2 from "../../Assets/homePortfolio (2).png";
import img_3 from "../../Assets/homePortfolio (2).png";

export default function ServicesOurServices() {
  return (
    <div className="services_our_services">
      <div className="title_sec">
        <h3>Services We Provide</h3>
        <p className="small_title">
          LeuNet ICT Solution, customers are its ambassadors, who are the
          witnesses of the professionalism on the best servces that we provide.
        </p>
      </div>
      <div className="image_section">
        <img src={img_1} />
        <img src={img_2} />
        <img src={img_3} />
      </div>
    </div>
  );
}
