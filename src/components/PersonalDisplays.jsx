import styled from "styled-components";
import styles from "../styles/style-modules/PersonalDisplays.module.css";
import React from "react";


const PersonalDisplays = (props) => {
  const { description, noun, videoSrc, active, activity } = props;

  return (
    <div className={`${styles['styled-personal-display']} ${"personal"}`} data-active={active} activity={activity}>
      <div className={` ${styles['noun-container']} ${styles["personal"]}`}>

        <h3>
          I am a {noun}
        </h3>
        <p>
          {description}
        </p>
      </div>
      <div className={`${styles['video-container']} ${"personal"} `}>
        <video id="my-video" className="personal-video" muted src={videoSrc} onMouseOver={(e) => {
          e.currentTarget.play();
        }} onMouseLeave={(e) => { e.currentTarget.pause(); }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PersonalDisplays;