import React from "react";
import colors from "../../utils/colors";
// eslint-disable-next-line react/prop-types
const ModeDisplay = ({ mode }) => {
  return (
    <h2
      style={{
        fontSize: "1rem",
        fontWeight: "normal",
        fontStyle: "italic",
        textAlign: "center",
        color: mode === "work" ? colors.red400 : colors.emerald400,
      }}
    >
      current mode: {mode}
    </h2>
  );
};

export default ModeDisplay;
