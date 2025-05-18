// Carousel.js
import "./Carousel.scss";

const carouselItems = [
  "Web Developer",
  "Front-End Development",
  "AI Integration",
  "Custom Web Design",
  "Search Engine Optimization",
];

function Carousel() {
  return (
    <div className="home__carousel">
      <div className="carousel-track">
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
        {/*duplication to make it look constant */}
        {carouselItems.map((item, index) => (
      <div className="carousel-item" key={`dup-${index}`}>
        {item}
      </div>
    ))}
      </div>
    </div>
  );
}

export default Carousel;
