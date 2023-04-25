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
    padding: "1rem",
    fontSize: "1.75rem",
  };

  const inputStyles = {
    fontSize: "1.75rem",
    width: "5rem",
    textAlign: "center",
  };
  return (
    <div style={containerStyles}>
      <h2 style={{ fontSize: "2rem" }}>Settings</h2>
      <div style={eachLineStyles}>
        <p>Work minutes:</p>
        <input style={inputStyles} type="number" />
      </div>

      <div style={eachLineStyles}>
        <p>Break minutes:</p>
        <input style={inputStyles} type="number" />
      </div>

      <button style={{ marginTop: "5rem", marginBottom: "5rem" }}>OK</button>
    </div>
  );
};

export default Settings;
