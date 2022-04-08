import React from "react";
import "./Slider.css";
import img1 from "../../media/img1.jpeg";
import img2 from "../../media/img2.jpeg";
import img3 from "../../media/img3.jpeg";
import img4 from "../../media/img4.jpeg";
import img5 from "../../media/img5.jpeg";
import img6 from "../../media/img6.jpeg";

const slidesInfo = [
  {
    src: img1,
    alt: "Perspectiva 1",
    desc: "Perspectiva 1",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
  {
    src: img2,
    alt: "Perspectiva 2",
    desc: "Perspectiva 2",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
  {
    src: img3,
    alt: "Perspectiva 3",
    desc: "Perspectiva 3",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
  {
    src: img4,
    alt: "Perspectiva 4",
    desc: "Perspectiva 4",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
  {
    src: img5,
    alt: "Perspectiva 5",
    desc: "Perspectiva 5",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
  {
    src: img6,
    alt: "Perspectiva 6",
    desc: "Perspectiva 6",
    url: "https://onedrive.live.com/?authkey=%21ANQ8g%5FLvCA1R8Kc&id=D759057274F7D1E3%218943&cid=D759057274F7D1E3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.url} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;
