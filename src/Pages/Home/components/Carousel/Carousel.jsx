// Carousel.js
import "./Carousel.scss";
import { carouselItems } from "./CarouselData";


function Carousel() {
  return (
    <div className="home__carousel">
      <div className="home__carousel-track">
        {carouselItems.map((item, index) => (
          <div className="home__carousel-item" key={index}>
            {item}
          </div>
        ))}
        {/*duplication to make it look constant */}
        {carouselItems.map((item, index) => (
          <div className="home__carousel-item" key={`dup-${index}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
