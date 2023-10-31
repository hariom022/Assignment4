import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Slider.css";
const Slider1 = () => {
  return (
    <div className="slider">
      <OwlCarousel
        className="owl-theme"
        items={3}
        loop
        nav={false}
        dots={false}
        // margin={15}
      >
        <div>
          <img
            src="image 39@2x.png"
            alt=""
            style={{ width: "252px", height: "180px" }}
          />
          <p>Modern Wall Decor Framed Painting</p>
        </div>
        <div>
          <img
            src="image 40@2x.png"
            alt=""
            style={{ width: "252px", height: "180px" }}
          />
          <p>Modern Wall Decor Framed Painting</p>
        </div>
        <div>
          <img
            src="pexels-max-vakhtbovych-6782342@2x.png"
            alt=""
            style={{ width: "252px", height: "180px" }}
          />
          <p>Modern Wall Decor Framed Painting</p>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider1;
