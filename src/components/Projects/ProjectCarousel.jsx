import React, { useState } from "react";


function isActive(elem, arr, count) {

  if (arr.indexOf(elem) === count) {
    return true;
  }
  return false;
}


const ProjectCarousel = (props) => {
  const { displays, carouselTitle, personalDisplayClasses, buttons } = props;
  const [carouselCount, setCarouselCount] = useState(0);

  const slidesArrayLength = displays.length;
  console.log(displays);
  const changeSlide = (direction) => {
    // Increment carousel count by 1, but if it exceeds the number of array items, then reset
    if (direction === "next") {
      setCarouselCount((prev) => {
        if (carouselCount < slidesArrayLength - 1) {
          return prev + 1;
        }
        return 0;
      });
      return;
    } else if (direction === "previous") {
      // if at the start of array, and previous slide btn is clicked, then go to the last slide.
      if (carouselCount === 0) {
        setCarouselCount(slidesArrayLength - 1);
        return;
      }
      setCarouselCount((prev) => {
        return prev - 1;
      });
      return;
    }

  };

  const createMappedItems = (arrayToMap) => {
    return arrayToMap.map((information, index) => {
      return (
        <li className="personal-display-list" key={index} data-active={isActive(information, arrayToMap, carouselCount)} >
          <div style={{
            backgroundImage: `${information.src}`
          }}>

          </div>
          {buttons ? <><button className="carousel-button previous" onClick={() => {
            changeSlide("previous");
          }}>&#10148;</button>
            <button className="carousel-button next" onClick={() => {
              changeSlide("next");
            }}>&#10148;</button></> : null}
        </li>);
    });
  };

  const mySlides = createMappedItems(displays);
  return (
    <div className="project project-carousel-container" >
      {carouselTitle ?
        <div className="project project-carousel-header-div">
          <h2>{carouselTitle}</h2>
        </div> : null
      }
      <div className="project project-ul-container" >
        <ul className="project ul">
          {mySlides}
        </ul>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProjectCarousel;