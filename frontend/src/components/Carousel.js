import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Carousel = ({ dataCarousel }) => {
  const theme = useSelector((state) => state.theme);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [opacity, setOpacity] = useState("");
  const url1 = theme === "dark"
  ? "../images/dark/"
  : "../images/light/"
  const goToPreviousProject = () => {
    setSlideDirection("prev");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? dataCarousel.carousel.length - 1 : prevIndex - 1
      );
      setSlideDirection("next");
      setOpacity("op");
    }, 125);
  };

  const goToNextProject = () => {
    setSlideDirection("next");
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === dataCarousel.carousel.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection("prev");
      setOpacity("op");
    }, 125);
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setSlideDirection("");
      setOpacity("");
    }, 250);

    return () => clearTimeout(animationTimeout);
  }, [slideDirection]);

  return (
    <div className="carousel">
      <div className={`cover ${slideDirection}`}>
        <img
          width={50}
          src={
            url1+'next-svgrepo-com.svg'
          }
          alt="flèche précédente"
          className="arrow not-next"
          onClick={goToPreviousProject}
        />

        <a href={dataCarousel.url} className="cover-container" rel="noreferrer" target="_blank">
          <img
            className={`cover-img ${slideDirection} ${opacity}`}
            src={dataCarousel.carousel[currentProjectIndex]}
            alt={"image du projet " + dataCarousel.name}
          />
        </a>

        <img
          width={50}
          src={
            url1+'next-svgrepo-com.svg'
          }
          alt="flèche suivante"
          className="arrow next"
          onClick={goToNextProject}
        />
      </div>
    </div>
  );
};

export default Carousel;
