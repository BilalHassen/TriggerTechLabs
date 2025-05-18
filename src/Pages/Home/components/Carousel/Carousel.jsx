// Carousel.js
import "./Carousel.scss";

const carouselItems = [
  "Web Developer",
  "Custom Web Design",
  "Mobile-First Design",
  "Front-End Development",
  "E-Commerce Development",
  "API Integration",
  "RESTful Services",
  "AI-Powered Features",
  "Search Engine Optimization",
];


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
