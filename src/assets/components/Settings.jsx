const Settings = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80vw",
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
  return (
    <div style={containerStyles}>
      <h2 style={{ fontSize: "2rem" }}>Settings</h2>

      <div style={eachLineStyles} className="text-red400">
        <p>Work minutes:</p>
        <input style={inputStyles} className="text-red400" type="number" />
      </div>

      <div style={eachLineStyles} className="text-emerald400">
        <p>Break minutes:</p>
        <input style={inputStyles} className="text-emerald400" type="number" />
      </div>

      <button style={{ marginTop: "5rem", marginBottom: "5rem" }}>OK</button>
    </div>
  );
};

export default Settings;
