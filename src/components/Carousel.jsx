import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PersonalDisplays from "./Introduction/PersonalDisplays";

const StyledCarousel = styled.div`
  position: relative;
  min-width: 100%;
  display: grid;
  margin-top: 1em;
  
  hr {
    width: 100%;
    border: 1px solid blue;
  }

  .header-div {
    display: grid;
    align-items: end;
    z-index: 2;

    > h2 {
    letter-spacing: 0.03em;
    z-index: 2;
    width: fit-content;
  }
  }

  .ul-container {
    display: grid;
    position: relative;
    width: 100%;
    min-height: 100%;
    justify-self: center;
  }

  .personal-list-container {
    position: relative;
    width: 100%;
    justify-self: center;
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-areas: "list";
  }

  .carousel-button {
    z-index: 2;
    position: absolute;
    justify-self: center;
    top: 50%;
    background: none;
    border: none;
    color: var(--text-color);
    font-size: var(--font-size-lg);
  }

  .carousel-button.next {
    transform: translateY(-50%);
    right: -1.1em;
  }
  .carousel-button.previous {
    left: -1.1em;
    transform: scaleX(-1) translateY(-100%);
  }
  .personal-display-list {
    padding: 0;
    margin: 0;
    margin-top: 1em;
    display: block;
    list-style: none;
    opacity: 0;
    top: -50px;
    width: 100%;
    transition: 200ms opacity ease-in-out;
    transition-delay: 0ms;
    grid-area: list;
  }

  @media (min-width: 1251px) {
    .personal-display-list {
      padding-bottom: 20vh;
    }
  }

  li.personal-display-list[data-active="true"] {
    opacity: 1;
    transition-delay: 200ms;
    z-index: 1;
    .noun-header {
      animation: glitchName 0.9s 3 ease-in-out .85s alternate both;
    }
  }
`;

function isActive(elem, arr, count) {
  // A function that determines which slide is currently active
  // receives an element, in conjunction with arr.indexOf, it checks if it is the current carouselCount
  if (arr.indexOf(elem) === count) {
    return true;
  }
  return false;
}


const Carousel = (props) => {
  const { displays, carouselTitle, personalDisplayClasses, buttons } = props;
  const [carouselCount, setCarouselCount] = useState(0);

  const slidesArrayLength = displays.length;

  useEffect(() => {
    const aboutSection = document.querySelector('.about-container');
    const carousel = document.querySelector('.carousel-container');
    window.addEventListener('scroll', function () {
      const heightTop = aboutSection.offsetTop;
      const heightOH = aboutSection.offsetHeight;
      const heightBottom = heightTop + heightOH;
      const windowScroll = this.scrollY;

      if (windowScroll > heightBottom) {
        carousel.classList.add('show');
      }
    });

  }, []);

  // Slide position is determined by carouselCount
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
    // map carousel slides into link elements
    // data-active is determined by isActive, this is a custom attribute which has different styling
    return arrayToMap.map((information, index) => {
      return (
        <li className="personal-display-list" key={index} data-active={isActive(information, arrayToMap, carouselCount)} >
          <PersonalDisplays noun={information.noun} description={information.description} src={information.src} media={information.media} classes={personalDisplayClasses} />
          {buttons ? <><button className="carousel-button previous" onClick={() => {
            changeSlide("previous");
          }}>&#10148;</button>
            <button className="carousel-button next" onClick={() => {
              changeSlide("next");
            }}>&#10148;</button></> : null}
        </li>);
    });
  };
  // Slide elements to be added into a ul
  const mySlides = createMappedItems(displays);
  return (
    <StyledCarousel className="carousel-container" >
      {carouselTitle ?
        <div className="carousel header-div">
          <h2>{carouselTitle}</h2>
        </div> : null
      }
      <div className="ul-container" >
        <ul className="personal-list-container">
          {mySlides}
        </ul>
      </div>
      <hr></hr>
    </StyledCarousel>
  );
};

export default Carousel;