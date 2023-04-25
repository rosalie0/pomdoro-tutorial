import { useState } from "react";
import Timer from "./assets/components/Timer";
import Settings from "./assets/components/Settings";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <Settings />
      {showSettings ? <Settings /> : <Timer />}
    </div>
  );
}

export default App;
