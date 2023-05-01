import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import { useContext, useEffect, useRef, useState } from "react";
import "../../index.css";
import SettingsContext from "../../utils/SettingsContext";
import colors from "../../utils/colors";

// info on how to style/use the React Circular Progressbar here:
// https://www.npmjs.com/package/react-circular-progressbar

const Timer = () => {
  // PROGRESS BAR
  // The progressbar is designed to fill the width of its container.
  const containerStyles = {
    width: "50vw",
    margin: "0px auto",
    border: "2px solid red",
  };

  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(false); // toggles what button to show
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const initTimer = () => {
    // by default on startup, start with work minutes.
    setSecondsLeft(settingsInfo.workMinutes * 60);
  };

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  // const startTimer = () => {
  //   timerId.current = setInterval(() => {}, 1000);
  // };

  const changeMode = () => {
    // if current mode is 'work', now will be Break!
    if (mode === "work") {
      setMode("break");
      modeRef.current = "break"; // update ref
      setSecondsLeft(settingsInfo.breakMinutes * 60);
    } else {
      setMode("work");
      modeRef.current = "work"; // update ref
      setSecondsLeft(settingsInfo.workMinutes * 60);
    }
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeft - 1); // set it to secondsLeftRef.current maybe?
  };
  useEffect(() => {
    initTimer();
    // every second, we want to run...
    const intervalId = setInterval(() => {
      // if timer is Paused, dont need to do anything.
      if (isPaused) return;
      // if timer has 0 seconds remaining, change mode, and we're done.
      if (secondsLeft === 0) return changeMode();
      tick(); // else, tick.
    }, 1000);

    return clearInterval(intervalId);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds) * 100;

  return (
    <div>
      <div style={containerStyles}>
        <CircularProgressbar
          styles={buildStyles({
            textColor: "#f88",
            pathColor: colors.emerald400, // this is the filled part of the prog
            trailColor: colors.bluegrey100, // this is the unfilled part of the prog
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {isPaused ? (
          <PauseButton setIsPaused={setIsPaused} />
        ) : (
          <StartButton
            setIsPaused={setIsPaused}
            buttonStyles={{ color: "red" }}
          />
        )}

        <button
          className="secondary-button"
          onClick={() => {
            settingsInfo.setShowSettings(true);
          }}
        >
          settings
        </button>
      </div>
    </div>
  );
};

export default Timer;
