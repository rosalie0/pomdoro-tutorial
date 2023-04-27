import { useState } from "react";
import Timer from "./assets/components/Timer";
import Settings from "./assets/components/Settings";
import SettingsContext from "./utils/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(15);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          workMinutes,
          setWorkMinutes,
          breakMinutes,
          setBreakMinutes,
        }}
      >
        <Settings />
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
