import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./component/Calendar";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Calendar />
  </React.StrictMode>
);
