const PauseButton = ({ buttonStyles, setIsPaused }) => {
  const styles = {
    padding: "1.5rem",
    borderRadius: "1rem",
    fontSize: "1.5rem",
    border: 0,
    width: "10rem",
  };

  const onClickHandler = () => {
    setIsPaused(false); // if the PAUSE btn is being clicked, pause should now become FALSE.
  };

  return (
    <button style={styles} onClick={onClickHandler}>
      ⏸️ Pause
    </button>
  );
};

export default PauseButton;
