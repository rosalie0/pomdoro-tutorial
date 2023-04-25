const PlayButton = ({ buttonStyles, setIsPaused }) => {
  const styles = {
    padding: "1.5rem",
    borderRadius: "1rem",
    fontSize: "1.5rem",
    border: 0,
    width: "10rem",
  };

  const onClickHandler = () => {
    setIsPaused(true); // if the PLAY btn is being clicked, pause should now become TRUE.
  };
  return (
    <button style={styles} onClick={onClickHandler}>
      ▶️ Play
    </button>
  );
};

export default PlayButton;
