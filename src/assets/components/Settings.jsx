import colors from "../../utils/colors";
import { useContext } from "react";
import SettingsContext from "../../utils/SettingsContext";

const Settings = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "80vw",
    height: "auto",
    padding: "4rem",
    border: "2px solid white",
    margin: "auto auto",
  };
  const eachLineStyles = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    fontSize: "1.75rem",
  };
  const inputStyles = {
    borderStyle: "none none solid",
    height: "100%",
    width: "5rem",
    fontSize: "1.75rem",
    textAlign: "center",
    backgroundColor: "transparent",
    borderBottom: "2px solid",
    fontFamily: "monospace",
  };
  const okButton = {
    fontSize: "1.5rem",
    cursor: "pointer",
    marginTop: "5rem",
    marginBottom: "5rem",
    backgroundColor: colors.bluegrey500,
    color: colors.bluegrey100,
  };

  const settingsInfo = useContext(SettingsContext);

  return (
    <div style={containerStyles}>
      <h2 style={{ fontSize: "2rem" }}>Settings</h2>
      <div style={eachLineStyles} className="text-red400">
        <p>Work minutes:</p>
        <input
          style={inputStyles}
          className="text-red400"
          type="number"
          value={settingsInfo.workMinutes}
          onChange={(event) => settingsInfo.setWorkMinutes(event.target.value)}
        />
      </div>
      <div style={eachLineStyles} className="text-emerald400">
        <p>Break minutes:</p>
        <input
          style={inputStyles}
          className="text-emerald400"
          type="number"
          value={settingsInfo.breakMinutes}
          onChange={(event) => settingsInfo.setBreakMinutes(event.target.value)}
        />
      </div>
      <button
        className="secondary-button"
        style={okButton}
        onClick={() => {
          settingsInfo.setShowSettings(false);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Settings;
