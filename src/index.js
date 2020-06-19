import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.querySelector("#root")
);
