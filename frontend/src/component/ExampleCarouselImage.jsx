import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function ExampleCarouselImage({ imgSrc, text }) {
  return (
    <div>
      <img className="d-block w-100" src={imgSrc} alt={text} />
    </div>
  );
}
export default ExampleCarouselImage;
