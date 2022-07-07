import styled from "styled-components";
import React from "react";

const StyledPersonalDisplay = styled.div`  
  /* position: fixed; */
  width: 85%;
  margin-right: 0;
  /* margin-top: 1em; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50px + 35vw), 1fr));
  grid-template-rows: none;
  padding: 1em;

  .noun-container {
    h3 {
      margin-bottom: 0;
    }
    p {
      margin: 0;
      font-family: JostMedium;
      background-color: var(--bg-color-sub);
      color: var(--bg-color-main);
      text-align: center;
    }
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
  max-width: 90%;
  margin-right: 0;
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  padding: 1em;

.noun-container {
  color: var(--bg-color-main);
  background-color: var(--bg-color-sub);
  font-weight: 900;
  padding: 1em;
  grid-area: 3/1/7/8;
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
  }

  > h3 {
    position: absolute;
    transform: translateY(-50%);

    font-weight: 100;
    top: -15%;
    color: var(--color-text);
    background-color: var(--bg-color-accent-main);
    width: 35%;
    text-align: center;
    padding: 0.5em;
  }
}

.video-container {
  grid-area: 1/6/9/13;
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