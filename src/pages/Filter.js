import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import "../stayle/filter.css";
function Filter() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="grid__item ">
          <p className="">We Work to Craft Solid Products </p>
          <p>
            & <span className="project">Project</span> For You
          </p>
        </div>
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} />{" "}
              <h1 className="Filter__header">{item.desc}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;