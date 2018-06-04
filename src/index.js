import React from "react";
import { render } from "react-dom";
import MainPage from "./Main.js";

const App = () => (
  <div>
    <MainPage />
  </div>
);

render(<App />, document.getElementById("root"));
