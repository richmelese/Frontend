import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Content from "./Pages/Contact/ContentDisplay";
// import "bootstrap/dist/css/bootstrap.css";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
