import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PersonalDisplays from "./PersonalDisplays";
import clipOne from "../../public/powerlifter.mp4";
import clipTwo from "../../public/hiker.mp4";
import clipThree from "../../public/Donda.mp4";
import { allMyText } from "../utils";

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
  const testArray = [<PersonalDisplays noun={allMyText.nounOne} description={allMyText.descriptionOne} videoSrc={clipOne} />, <PersonalDisplays noun={allMyText.nounOne} description={allMyText.descriptionOne} videoSrc={clipTwo} />, <PersonalDisplays noun={allMyText.nounOne} description={allMyText.descriptionOne} videoSrc={clipThree} />];

  const carouselLogic = useCallback(() => {
    let myTimer;
    let count;
    // Essentially I am using setInterval to move through the first, second, and third index of my displays array.
    // Only works if displays is an array. 

    if (Array.isArray(displays)) {
      myTimer = setInterval(() => {
        if (disableInterval.current === 1 && carouselTimer < 3) {
          setCarouselTimer((prev) => {
            return prev + 1;
          });
          disableInterval.current = 0;
          setCarouselInit(false);
          return;
        }

        // TODO: Invoke function that will make carousel normal/scrollable
        clearInterval(myTimer);
      }, 5000);
    }

    return;
  }, []);

  const awaitCarouselDisplay = useCallback((direction = "next") => {
    let myTimer;
    setTimeout(() => {
      if (carouselTimer < 3) {
        if (direction === "next") {
          setCarouselTimer((prev) => {
            return prev + 1;
          });
        } else if (direction === "previous") {
          if (disableInterval.current === 0) {
            setCarouselTimer(displays.length - 1);
            setCarouselInit(false);
            return;
          }
          setCarouselTimer((prev) => {
            return prev - 1;
          });
        }

        setCarouselInit(false);
        return;
      }
    }, 2000);

  }, []);

  useEffect(() => {
    if (carouselTimer > 2) {
      console.log('disabled');
      setCarouselTimer(0);
    }
    console.log('test');
  });


  return (
    <div className="carousel-container" >
      <div>
        <h3>A little bit about me..</h3>
      </div>
      <div onClick={() => {
        if (carouselInit === false) {
          // disableInterval.current = 1;
          // carouselLogic();
          awaitCarouselDisplay();
        }
        setCarouselInit(true);
      }}>
        {testArray[carouselTimer]}
      </div>
    </div>
  );
};

export default Carousel;