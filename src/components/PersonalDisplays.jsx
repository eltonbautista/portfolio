import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`
  max-width: 100%;

  .video-container>video {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
  }
`;


const PersonalDisplays = (props) => {
  const { description, noun, videoSrc, active, activity } = props;

  return (
    <StyledPersonalDisplay className="container personal" data-active={active} activity={activity}>
      <div className="personal noun-container">
        <p >
          I am a {noun}
        </p>
      </div>
      <div className="personal video-container">
        <video id="my-video" className="personal-video" muted src={videoSrc} onMouseOver={(e) => {
          e.currentTarget.play();
        }} onMouseLeave={(e) => { e.currentTarget.pause(); }}
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