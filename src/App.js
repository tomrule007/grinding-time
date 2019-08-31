import React, { useState } from "react";
import grindChartView from "./containers/grindChartView";
import grindEndDialog from "./containers/grindEndDialog";
import grindLogView from "./containers/grindLogView";
import grindStartDialog from "./containers/grindStartDialog";
import grindToggleBtn from "./containers/grindToggleBtn";

function App() {
  // an array of session objects, will be stored in localStorage.
  const [grindLog, setGrindLog] = useState([]);

  const [session, setSession] = useState({
    grinding: false,
    startTime: null,
    endTime: null,
    //startDialog
    tag: null,
    goal: null,
    //endDialog
    mood: null,
    comment: null
  });
  const { grinding, startTime } = session;
  return (
    <div className="App">
      <grindToggleBtn />
      {grinding && <grindStartDialog />}
      {!grinding && startTime && <grindEndDialog />}
    </div>
  );
}

export default App;
