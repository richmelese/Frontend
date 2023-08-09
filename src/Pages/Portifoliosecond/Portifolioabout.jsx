import React from "react";
import HomeBanner from "../../Assets/bgbanner.png";
import "../../styles/portifoliosecond/portifolioabout.css";
const Portifolioabout = () => {
  return (
    <div>
      <section>
        <div className="grid__About">
          <div className="about_paragrahp">
            <h1>About the project</h1>
            <p>
              As technology continues to evolve rapidly, we stay at the
              forefront of innovation. Our team of experts undergoes continuous
              training and exploration of emerging technologies to provide you
              with future-ready solutions. We embrace a culture of learning and
              stay up-to-date with the latest industry trends, ensuring our
              clients always have a competitive edge
            </p>
            <p>
              Our comprehensive and flexible products and solutions are designed
              to:{" "}
            </p>
            {/* <ol className="number">
                    <li><p> Nostrum facere repellendus minus quod</p></li>
                    <li> <p>Nostrum facere repellendus minus quod</p></li>
                    <li><p> Nostrum facere repellendus minus quod</p></li>
                    <li> <p>Nostrum facere repellendus minus quod</p></li>
                </ol> */}
          </div>
          <div>
            {" "}
            <ol className="number">
              <li>
                <p> Minimize paper work.</p>
              </li>
              <li>
                {" "}
                <p> Reduce administrative costs.</p>
              </li>
              <li>
                <p> Adopt international standards. </p>
              </li>
              <li>
                {" "}
                <p> Sustain business workflow</p>
              </li>
            </ol>
          </div>
          <div></div>
          <div className="abtimage">
            <img src={require("../../Assets/abtimage.png")} />
          </div>
        </div>
        <div className="grid__second">
          {/* <div className="second_heading">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, adipiscing praesent velit viverra sit
              semper lorem eu cursus vels hendrerit elementum. Morbi curabitur
              etiam nibh justo, lorem aliquet donec. Sed sit mi dignissim at
              ante massa mattis egestas.
            </p>
          </div> */}
          {/* <ul className="orderd">
            <li>adipiscing praesent velit viverra sit semper</li>
            <li>adipiscing praesent velit viverra sit semper</li>
            <li>adipiscing praesent velit viverra sit semper</li>
            <li>adipiscing praesent velit viverra sit semper</li>
          </ul>
          <p className="phh">
            Lorem hendrerit elementum. Morbi curabitur etiam nibh justo, lorem
            aliquet donec. Sed sit mi dignissim at ante massa mattis egestas.
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Portifolioabout;
