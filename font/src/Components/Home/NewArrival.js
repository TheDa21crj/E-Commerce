import React from "react";
import NACss from "./Css/NewArrival.module.css";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./../../Img/Header/woman.jpg";
// import img1 from "./../../";
import img2 from "./../../Img/Header/girl-lying-on-the-grass.jpg";
import img3 from "./../../Img/Header/christmas.jpg";

export default function NewArrival() {
  var setting = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className={NACss.mDiv}>
      <h1>New Arrival</h1>
      <div>
        <Sliders {...setting} className={NACss.Hslide}></Sliders>
      </div>
    </div>
  );
}
