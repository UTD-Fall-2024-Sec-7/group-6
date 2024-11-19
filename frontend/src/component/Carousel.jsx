import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="h-screen">
      <Carousel.Item>
        <ExampleCarouselImage
          imgSrc="https://content-enus.bwbcovers.com/content/images/jumbotron/2024-08-Bestof2024.png"
          text="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Bookish Holiday Gift Guide</h3>
          <p>They'll be raving about these reads all year.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage
          imgSrc="https://content-enus.bwbcovers.com/content/images/jumbotron/GiftWorthyTile-Updated.png"
          text="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage
          imgSrc="https://content-enus.bwbcovers.com/content/images/jumbotron/Dolly-Parton-Tile-Holiday.png"
          text="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
