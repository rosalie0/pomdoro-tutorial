import React from "react";

const PlayButton = ({ buttonStyles }) => {
  const styles = {
    padding: "1.5rem",
    borderRadius: "1rem",
    fontSize: "2rem",
    border: 0,
    margin: "2rem auto",
    width: "10rem",
    display: "block",
  };
  return <button style={styles}>▶️ Play</button>;
};

export default PlayButton;
