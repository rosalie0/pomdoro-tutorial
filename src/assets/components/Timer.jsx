import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import { useContext, useEffect, useRef, useState } from "react";
import SettingsContext from "../../utils/SettingsContext";
import colors from "../../utils/colors";
import getTimeDisplay from "./timeDisplay";
import ModeDisplay from "./ModeDisplay";
import "../../index.css";

// info on how to style/use the React Circular Progressbar here:
// https://www.npmjs.com/package/react-circular-progressbar

const Timer = () => {
  // PROGRESS BAR
  // The progressbar is designed to fill the width of its container.
  const containerStyles = {
    width: "50vw",
    margin: "0px auto",
  };

  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true); // toggles what button to show
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const initTimer = () => {
      // by default on startup, start with work minutes.
      secondsLeftRef.current = settingsInfo.workMinutes * 60;
      setSecondsLeft(settingsInfo.workMinutes * 60);
    };

    const changeMode = () => {
      // if current mode is 'work', now will be Break!
      if (modeRef.current === "work") {
        setMode("break");
        modeRef.current = "break"; // update ref
        setSecondsLeft(settingsInfo.breakMinutes * 60);
        secondsLeftRef.current = settingsInfo.breakMinutes * 60;
      } else {
        setMode("work");
        modeRef.current = "work"; // update ref
        setSecondsLeft(settingsInfo.workMinutes * 60);
        secondsLeftRef.current = settingsInfo.workMinutes * 60;
      }
    };

    initTimer(); // on mount, start at work mins.

    // every second, we want to run...
    const intervalId = setInterval(() => {
      // if timer is Paused, dont need to do anything.
      console.log(isPausedRef.current);
      if (isPausedRef.current) return;
      // if timer has 0 seconds remaining, change mode, and we're done.
      if (secondsLeftRef.current === 0) return changeMode();
      tick(); // else, tick.
    }, 1000);

    return () => clearInterval(intervalId);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentOfTimeLeft = Math.round((secondsLeft / totalSeconds) * 100);
  console.log({ secondsLeft, totalSeconds, percentOfTimeLeft });
  const percentOfTimeElapsed = 100 - percentOfTimeLeft;
  const timeDisplay = getTimeDisplay(secondsLeft);

  return (
    <div>
      <ModeDisplay mode={mode} />
      <div style={containerStyles}>
        <CircularProgressbar
          styles={buildStyles({
            textColor: colors.bluegrey100,
            // pathColor is the FILLED part of the progress. trail is UNFILLED.
            pathColor: mode === "work" ? colors.red400 : colors.emerald400,
            trailColor: colors.bluegrey100,
          })}
          value={percentOfTimeElapsed}
          text={timeDisplay}
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
          <StartButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
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
