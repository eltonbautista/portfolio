import styles from "../../styles/style-modules/PersonalDisplays.module.css";


const PersonalDisplays = (props) => {
  const { description, noun, src, active, activity, classes, media } = props;
  return (
    <div className={`${styles[classes]} ${"personal-display"}`} data-active={active} activity={activity}>
      <div className={` ${styles['noun-container']} ${"personal"}`}>

        <h3 className={`${styles['noun-header']} ${'noun-header'}`}>
          I am a {noun}
        </h3>
        <p>
          {description}
        </p>
      </div>
      <div className={`${styles['video-container']} ${"personal"} `}>
        {media === "video" ?
          <video id="my-video" className="personal-video" muted src={src} onMouseOver={(e) => {
            e.currentTarget.play();
          }} onMouseLeave={(e) => { e.currentTarget.pause(); }}
          >
            <source src={src} type="video/mp4" />
          </video> : <img src={src} alt={media} ></img>}

      </div>
    </div>
  );
};

export default PersonalDisplays;