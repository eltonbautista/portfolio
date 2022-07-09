import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PersonalDisplays from "./Introduction/PersonalDisplays";
import clipOne from "../../public/powerlifter.mp4";
import clipTwo from "../../public/hiker.mp4";
import clipThree from "../../public/Donda.mp4";
import { allMyText } from "../utils";

const StyledCarousel = styled.div`
  position: relative;
  min-width: 100%;
  display: grid;
  margin-top: 1em;
  .header-div {
    display: grid;
    align-items: end;
    transform: translateX(-1px);
    z-index: 2;

    > h3 {
    margin-bottom: 1.2em;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    z-index: 2;
    font-family: var(--font-header);
    letter-spacing: 0.1em;
    padding-bottom: 0.7em;
  }
  }


  .test-div {
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
    
  }

  .carousel-button {
    z-index: 2;
    position: absolute;
    justify-self: center;
    top: 50%;
    background: none;
    border: none;
    color: var(--bg-color-sub);
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
    border-top: 1px solid white;

    padding: 0;
    margin: 0;
    margin-top: 1em;
    display: grid;
    justify-items: center;
    justify-self: center;
    opacity: 0;
    position: absolute;
    top: -50px;
    width: 100%;

    transition: 200ms opacity ease-in-out;
    transition-delay: 0ms;
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
  const { displays, children } = props;
  const [carouselCount, setCarouselCount] = useState(0);

  const testArray =
    [
      <PersonalDisplays noun={allMyText.nounOne} description={allMyText.descriptionOne} videoSrc={clipOne} />,
      <PersonalDisplays noun={allMyText.nounTwo} description={allMyText.descriptionTwo} videoSrc={clipTwo} />,
      <PersonalDisplays noun={allMyText.nounThree} description={allMyText.descriptionThree} videoSrc={clipThree} />];
  const slidesArrayLength = testArray.length;

  // Slide position is determined by carouselCount
  const nextSlide = () => {
    // Increment carousel count by 1, but if it exceeds the number of array items, then reset
    setCarouselCount((prev) => {
      if (carouselCount < slidesArrayLength - 1) {
        return prev + 1;
      }
      return 0;
    });
    return;
  };

  const previousSlide = () => {

    // if at the start of array, and previous slide is clicked, then go to the last slide.
    if (carouselCount === 0) {
      setCarouselCount(slidesArrayLength - 1);
      return;
    }
    setCarouselCount((prev) => {
      return prev - 1;
    });
    return;
  };

  // TODO: Make it so that when user scrolls to the "A little about me" section, the animations play, and not before that.

  const createMappedItems = (arrayToMap) => {
    // map carousel slides into link elements
    // data-active is determined by isActive, this is a custom attribute which has different styling
    return arrayToMap.map((element, index) => {
      return (
        <li className="personal-display-list" key={index} data-active={isActive(element, arrayToMap, carouselCount)} >{element}
          <button className="carousel-button previous" onClick={previousSlide}>&#10148;</button>
          <button className="carousel-button next" onClick={nextSlide}>&#10148;</button>
        </li>);
    });
  };
  // Slide elements to be added into a ul
  const mySlides = createMappedItems(testArray);

  return (
    <StyledCarousel className="carousel-container" >
      <div className="carousel header-div">
        <h3>A little bit about me..</h3>
      </div>
      <div className="test-div" >
        <ul className="personal-list-container">
          {mySlides}
        </ul>
      </div>

    </StyledCarousel>
  );
};

export default Carousel;