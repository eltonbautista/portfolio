import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`  
    width: 90%;
    margin-right: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(50px + 35vw), 1fr));
    grid-template-rows: none;
    padding: 1em;
  


  .styled-personal-display>.noun-container {
    grid-area: none;
  }

  .styled-personal-display>.video-container {
    grid-area: none;
  }

  .video-container>video {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
  }

  @media (min-width: 800px) and (max-height: 1300px) {
  
  position: relative;
  max-width: 95%;
  margin-right: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  padding: 1em;


.noun-container {
  grid-area: 1/1/9/9;
}

.video-container {
  grid-area: 2/5/8/13;
}

.video-container>video {
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: auto;
}
}

`;


const PersonalDisplays = (props) => {
  const { description, noun, videoSrc, active, activity } = props;

  return (
    <StyledPersonalDisplay className="styled-personal-display container personal" data-active={active} activity={activity}>
      <div className="personal noun-container">
        <h3>
          I am a {noun}
        </h3>
        <p>
          {description}
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
      {/* <div className="personal description-container">
        <p>
          {description}
        </p>
      </div> */}
    </StyledPersonalDisplay>
  );
};

export default PersonalDisplays;