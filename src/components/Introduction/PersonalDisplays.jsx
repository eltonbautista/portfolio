import styles from "../../styles/style-modules/PersonalDisplays.module.css";
import globals from "../../styles/globals.css";


const PersonalDisplays = (props) => {
  const { description, noun, src, active, activity, classes, media } = props;
  const mediaQueryEight = window.matchMedia("(max-width: 800px)");

  return (
    <div className={`${styles[classes]} ${"personal-display"}`} data-active={active} activity={activity}>
      <div className={` ${styles['noun-container']} ${"noun-container"}`}>

        <h3 className={`${styles['noun-header']} ${'noun-header'}`}>
          I am a {noun}
        </h3>
        <p>
          {description}
        </p>
      </div>
      <div className={`${styles['video-container']} ${"video-container"} `}>
        {mediaQueryEight.matches ?
          <video className="personal-video" muted autoPlay controls src={src} onMouseOver={(e) => {
            e.currentTarget.play();
          }} onMouseLeave={(e) => { e.currentTarget.pause(); }}
          >
            <source src={src} type="video/mp4" />
          </video> : <video className="personal-video" muted src={src} onMouseOver={(e) => {
            e.currentTarget.play();
          }} onMouseLeave={(e) => { e.currentTarget.pause(); }}
          >
            <source src={src} type="video/mp4" />
          </video>}

      </div>
    </div>
  );
};

export default PersonalDisplays;