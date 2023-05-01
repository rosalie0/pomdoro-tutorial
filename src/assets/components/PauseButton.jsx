const PauseButton = ({ buttonStyles, setIsPaused }) => {
  const onClickHandler = () => {
    setIsPaused(false); // if the PAUSE btn is being clicked, pause should now become FALSE.
  };

  return (
    <button
      className="main-button"
      style={buttonStyles}
      onClick={onClickHandler}
    >
      ⏸️ Pause
    </button>
  );
};

export default PauseButton;
