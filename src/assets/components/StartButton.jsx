const StartButton = ({ buttonStyles, setIsPaused }) => {
  const onClickHandler = () => {
    setIsPaused(true); // if the PLAY btn is being clicked, pause should now become TRUE.
  };
  return (
    <button
      className="main-button"
      style={buttonStyles}
      onClick={onClickHandler}
    >
      ▶️ Play
    </button>
  );
};

export default StartButton;
