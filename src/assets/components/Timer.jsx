import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import { useEffect, useState } from "react";
import "../../index.css";

// info on how to style/use the React Circular Progressbar here:
// https://www.npmjs.com/package/react-circular-progressbar

const Timer = () => {
  // eslint-disable-next-line no-unused-vars
  const red400 = "#F87171";
  const emerald400 = "#34D399";
  const bluegrey100 = "#F1F5F9";

  const percentage = 66;
  // The progressbar is designed to fill the width of its container.
  const containerStyles = {
    width: "50vw",
    margin: "0px auto",
    border: "2px solid red",
  };

  const timerTotal = 15; // 15 minutes.

  const [isPaused, setIsPaused] = useState(false); // toggles what button to show
  const [secondsLeft, setSecondsLeft] = useState(0);

  const initTimer = () => {
    setSecondsLeft(timerTotal * 60);
  };

  useEffect(() => {
    initTimer();

    // every second, we want to run...
    setInterval(() => {
      // if paused, dont need to do anything.
      if (isPaused) return;
      // if timer has 0 seconds remaining
    }, 1000);
  }, [isPaused]);

  return (
    <div>
      <div style={containerStyles}>
        <CircularProgressbar
          styles={buildStyles({
            textColor: "#f88",
            pathColor: emerald400, // this is the filled part of the prog
            trailColor: bluegrey100, // this is the unfilled part of the prog
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
          <PlayButton
            setIsPaused={setIsPaused}
            buttonStyles={{ color: "red" }}
          />
        )}

        <button className="secondary-button">settings</button>
      </div>
    </div>
  );
};

export default Timer;
