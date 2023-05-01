export default function getTimeDisplay(secondsLeft) {
  const minutesDisplay = Math.floor(secondsLeft / 60);
  let secondsDisplay = secondsLeft % 60;
  if (secondsDisplay < 10) secondsDisplay = "0" + secondsDisplay;
  const timeDisplay = `${minutesDisplay}:${secondsDisplay}`;
  return timeDisplay;
}
