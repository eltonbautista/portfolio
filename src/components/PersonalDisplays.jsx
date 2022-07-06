import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`
${props => props.active ? `animation: opacityChange 2s 1 ease-in-out alternate both;

@keyframes opacityChange {
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
}` : null}

${props => props.activity ? `animation: opacityChange 2s 1 ease-in-out alternate both;

@keyframes opacityChange {
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
}` : null}

/* animation: opacityChange 1s ease-in-out alternate both;


@keyframes opacityChange {
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
} */

  .video-container>video {
    object-fit: cover;
    width: 100%;
  }
`;
// onMouseLeave={(e) => {
//   e.currentTarget.pause();
// }}

const PersonalDisplays = (props) => {
  const { description, noun, videoSrc, active } = props;

  return (
    <StyledPersonalDisplay className="container personal" active={active} activity={active}>
      <div className="personal noun-container">
        <p >
          I am a {noun}
        </p>
      </div>
      <div className="personal video-container">
        <video id="my-video" className="personal-video" muted src={videoSrc} onClick={(e) => {
          e.currentTarget.play();
        }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="personal description-container">
        <p>
          {description}
        </p>
      </div>
    </StyledPersonalDisplay>
  );
};

export default PersonalDisplays;