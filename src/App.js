import React from "react";
import TaskApp from "./components/TaskApp";
import someData from "./data/tasks.json";



function App() {
  return ( 
  <div>{/* Code Here */}
    <TaskApp someData={someData} />
  </div>
  );
}

export default App;
