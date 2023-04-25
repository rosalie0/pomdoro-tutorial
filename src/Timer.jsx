import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = () => {
  const red400 = "#F87171";
  const teal400 = "#2DD4BF";
  const percentage = 66;
  // The progressbar is designed to fill the width of its container.
  const containerStyles = {
    width: "400px",
    margin: "0px auto",
    border: "2px solid red",
  };
  return (
    <div>
      Timer
      <div style={containerStyles}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>
    </div>
  );
};

export default Timer;
