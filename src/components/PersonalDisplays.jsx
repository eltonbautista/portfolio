import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`

  .video-container>video {
    object-fit: cover;
    width: 100%;
  }
`;
// onMouseLeave={(e) => {
//   e.currentTarget.pause();
// }}

const PersonalDisplays = (props) => {
  const { description, noun, videoSrc } = props;

  return (
    <StyledPersonalDisplay className="container personal">
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