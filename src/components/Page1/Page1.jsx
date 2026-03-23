import React from "react";
import "./Page1.css";
import SwiperComponent from "../OtherComponents/SwiperComponent";

function Page1() {
  const collections = [
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-6.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-1.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-2.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-3.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-4.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: "https://themewagon.github.io/kaira/images/banner-image-5.jpg",
      title: "Soft leather jackets",
      para: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
  ];
  return (  
    <div className="page1 display-flex">
      <div className="main-text display-flex">
        <h1 className="font-400">New Collections</h1>
        <p className="main-para wdt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
          voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
          harum, quibusdam ex repellat eaque!
        </p>
      </div>
      <div className="slider">
       <SwiperComponent collections={collections} />
      </div>
    </div>
  );
}

export default Page1;
