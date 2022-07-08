import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`  
  width: 85%;
  margin-right: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50px + 35vw), 1fr));
  grid-template-rows: none;
  padding: 1em;

  .noun-container {
    h3 {
      margin-bottom: 1em;
      color: var(--color-sub);
      box-shadow: 0 10px 5px -5px blue;
      width: 90%;
    }
    p {
      margin: 0;
      font-family: JostMedium;
      color: var(--color-text);
      text-align: center;
    }
  }

  .video-container>video {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
    margin-top: 0.5em;
  }

  @media (min-width: 800px) and (max-height: 1300px) {
  
  position: relative;
  width: 95%;
  margin-right: 0;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1em;

.noun-container {
  color: var(--color-text);
  padding: 1em;
  grid-area: 2/1/4/6;
  z-index: 1;
  position: relative;
  display: grid;
  > div {
    background-color: var(--bg-color-sub);
    max-width: 100%;
    min-height: 100%;
  }

  >h3, p {
    z-index: 1;
  }

  > p {
    padding: 0.5em;
    font-weight: 100;
    font-family: JostMedium;
    color: var(--color-text);
  }

  > h3 {
    position: absolute;
    transform: translateY(-50%);

    font-weight: 100;
    top: -15%;
    color: var(--color-sub);
    width: 35%;
    height: 12%;
    text-align: center;
    padding: 0.5em;
    box-shadow: 0 10px 5px -5px blue;
  }
}

.video-container {
  grid-area: 1/6/3/13;
  opacity: 0.7;
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
        {/* <div className="background"></div> */}
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