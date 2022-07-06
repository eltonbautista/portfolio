import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Carousel = (props) => {
  // Basically my goal for this component is to display my three PersonalDisplays components
  // After all three PersonalDisplays have gone through each of their media, then the Carousel becomes a normal carousel.
  // Thereby being given the ability to scroll through the contents. 
  // I can make it a normal carousel by passing a prop that disables my carouselLogic, and immediately enables normalCarouselLogic

  const { displays } = props;
  const disableInterval = useRef(0);
  // Once user has hovered over Carousel, then change this to true. This way, carouselLogic can only be invoked once.
  // I designed it this way so that the user can view it when they've viewed the component.
  const [carouselInit, setCarouselInit] = useState(false);
  // Once carouselInit = true, begin timer.
  const [carouselTimer, setCarouselTimer] = useState(0);


  const carouselLogic = useCallback(() => {
    let myTimer;
    // Essentially I am using setInterval to move through the first, second, and third index of my displays array.
    // Only works if displays is an array. 
    if (Array.isArray(displays)) {
      myTimer = setInterval(() => {
        if (disableInterval.current < 2) {
          setCarouselTimer((prev) => {
            return prev + 1;
          });
          disableInterval.current += 1;
          return;
        }

        // TODO: Invoke function that will make carousel normal/scrollable

        disableInterval.current = 0;
        clearInterval(myTimer);
      }, 1000);
    }

    return;
  }, []);


  return (
    <div className="carousel-container" onMouseOver={() => {
      if (carouselInit === false) {
        carouselLogic();
      }
      setCarouselInit(true);
    }}>
      <div>
        <h3>A little bit about me..</h3>
      </div>
      {displays[carouselTimer]}
    </div>
  );
};

export default Carousel;