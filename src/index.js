import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
