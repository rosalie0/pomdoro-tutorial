import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";

// info on how to style/use the React Circular Progressbar here:
// https://www.npmjs.com/package/react-circular-progressbar

const Timer = () => {
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
  return (
    <div>
      Timer
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
      <PlayButton buttonStyles={{ color: "red" }} />
    </div>
  );
};

export default Timer;
