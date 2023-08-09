import React, { useState } from "react";

import "../../styles/portifolio/ImageWithText.css";
import Fade from "react-reveal/Fade";

const Filterimage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const images = [
    {
      id: 1,
      src: "../image/imagfilter.png",
      filter: "filter1",
      text: "Tewos technology website desing",
    },
    {
      id: 2,
      src: "../image/Photo (1).png",
      filter: "filter1",
      text: "Applications developement",
    },
    {
      id: 3,
      src: "../image/Photofilter.png",
      filter: "filter2",
      text: "Web application",
    },
    {
      id: 4,
      src: "../image/filter2.png",
      filter: "filter2",
      text: "web desing",
    },
    {
      id: 4,
      src: "../image/Photo (2).png",
      filter: "filter4",
      text: "Custmoize App",
    },
    {
      id: 4,
      src: "../image/Photo (3).png",
      filter: "filter4",
      text: "Applications",
    },
  ];

  const filteredImages =
    selectedFilter === "all"
      ? images
      : images.filter((image) => image.filter === selectedFilter);

  return (
    <div>
      <Fade bottom duration={1500}>
        <div className="grid__item ">
          <p className="">We Work to Craft Solid Products </p>
          <p>
            & <span className="Servicess__span">Project</span> For You
          </p>{" "}
        </div>
        <div className="filter-buttons">
          <button className="filters" onClick={() => handleFilterClick("all")}>
            All
          </button>
          <button
            className="filters"
            onClick={() => handleFilterClick("filter1")}
          >
            Web desing
          </button>
          <button
            className="filters"
            onClick={() => handleFilterClick("filter2")}
          >
            Web app
          </button>
          <button
            className="filters"
            onClick={() => handleFilterClick("filter4")}
          >
            App design
          </button>
        </div>

        <div className="image-gallery">
          {filteredImages.map((image) => (
            <div key={image.id} className={`image-item ${image.filter}`}>
              <img src={image.src} alt={image.text} />
              <div className="image-overlay">
                <a href="Portfoliodetails">
                  {image.text}
                  <img
                    className="plus"
                    src={require("../../Assets/Plus.png")}
                  />
                </a>
              </div>
              <div className="image-overlay-text">{image.category}</div>
              <div className="image-overlay-icon"></div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Filterimage;
