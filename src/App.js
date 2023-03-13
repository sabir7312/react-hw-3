import "./index.css";
import React from "react";
import Statistics from "./components/Statistics/Statistics";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Statistics stats={data} />
    </div>
  );
}

export default App;
