import styles from "../../styles/style-modules/PersonalDisplays.module.css";


const PersonalDisplays = (props) => {
  const { description, noun, videoSrc, active, activity, classes } = props;
  console.log(classes);
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