const Settings = () => {
  const containerStyles = {
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
  };

  return (
    <div style={containerStyles}>
      <h2>Settings</h2>
      <div style={eachLineStyles}>
        <p>Work minutes:</p>
        <input type="number" />
      </div>

      <div style={eachLineStyles}>
        <p>Break minutes:</p>
        <input type="number" />
      </div>

      <button>OK</button>
    </div>
  );
};

export default Settings;
