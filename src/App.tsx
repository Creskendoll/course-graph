import React from "react";
import "./style/App.css";
import { AppGraph } from "./components/AppGraph";

const App: React.FC = () => {
  return (
    <div className="App">
      <header></header>
      <AppGraph />
    </div>
  );
};

export default App;
