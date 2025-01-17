import React from "react";
import Calculator from "./Calculator";
import "../styles/App.css";

const App = () => (
  <div
    data-testid="app-container"
    className="App w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <Calculator />
  </div>
);

export default App;
